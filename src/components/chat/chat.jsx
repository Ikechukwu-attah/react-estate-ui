import React, { useContext, useEffect, useRef, useState } from "react";
import "./chat.scss";
import { AuthContext } from "../../context/AuthContex";
import { apiAxios } from "../../config/axiosInstance";
import { format } from "timeago.js";
import { SocketContext } from "../../context/SocketContext";
import { useNotificationStore } from "../../lib/notificationStore";

const Chat = ({ chats }) => {
  const { socket } = useContext(SocketContext);
  const { currentUser } = useContext(AuthContext);
  const [chat, setChat] = useState(null);

  const messageEndRef = useRef(null);
  const decrease = useNotificationStore((state) => state.decrease);

  useEffect(() => {
    if (chat) {
      messageEndRef?.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat]);

  useEffect(() => {
    if (socket && currentUser) {
      console.log(`Emitting newUser event for ${currentUser.id}`);
      socket.emit("newUser", currentUser.id);
    }
  }, [socket, currentUser]);

  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await apiAxios("/chat/" + id);
      if (!res.data.seenBy.includes(currentUser.id)) {
        decrease();
      }
      setChat({ ...res.data, receiver });
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const text = formData.get("text");
    if (!text) return;

    try {
      const res = await apiAxios.post("/messages/" + chat.id, { text });
      setChat((prev) => ({ ...prev, messages: [...prev.messages, res?.data] }));
      e.target.reset();
      const receiverId = chat?.receiver?.id;
      console.log(`Sending message to receiver ID: ${receiverId}`);
      console.log("Current chat:", chat);
      socket.emit("sendMessage", {
        receiverId, // Ensure this is the correct user ID
        data: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const read = async () => {
      try {
        await apiAxios.put("/chat/read/" + chat.id);
      } catch (error) {
        console.log("error");
      }
    };
    if (chat && socket) {
      socket.on("getMessage", (data) => {
        if (chat.id === data.chatId) {
          setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
          read();
        }
      });

      // Cleanup socket listeners on component unmount
      return () => {
        socket.off("getMessage");
      };
    }
  }, [socket, chat]);
  chats.map((chating) => console.log(chating?.receiver));

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>

        {chats.map((chatc, index) => (
          <div
            className="message"
            key={index}
            style={{
              backgroundColor:
                chatc.seenBy.includes(currentUser.id) || chat?.id === chatc.id
                  ? "white"
                  : "yellow",
            }}
            onClick={() => handleOpenChat(chatc.id, chatc.receiver)}
          >
            <img
              key={index}
              src={chatc?.receiver?.avatar || "./profile.png"}
              alt="profile pics"
            />
            <span>{chatc?.receiver?.username}</span>
            <p>{chatc.lastMessage}</p>
          </div>
        ))}
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={chat?.receiver?.avatar || "./profile.png"} alt="" />
              {chat.receiver?.username}
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            {chat?.messages?.map((message) => (
              <div
                className="chatMessage"
                key={message.id}
                style={{
                  alignSelf:
                    message.userId === currentUser.id
                      ? "flex-end"
                      : "flex-start",
                  textAlign:
                    message.userId === currentUser.id ? "right" : "left",
                }}
              >
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}

            <div ref={messageEndRef}></div>
          </div>
          <form onSubmit={handleSubmit} className="bottom">
            <textarea name="text" id="" cols="30" rows="10"></textarea>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
