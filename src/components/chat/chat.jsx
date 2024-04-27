import React, { useState } from "react";
import "./chat.scss";

const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>

        {Array.from({ length: 6 }).map((_, index) => (
          <div className="message" key={index}>
            <img key={index} src="./profile.png" alt="profile pics" />
            <span>Jame Bolton</span>
            <p>Lorem ipsum dolor sit amet ...</p>
          </div>
        ))}
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="./profile.png" alt="" />
              Jame Bolton
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="chatMessage" key={index}>
                <p>welcome to the group</p>
                <span>1 hour ago</span>
              </div>
            ))}

            {Array.from({ length: 3 }).map((_, index) => (
              <div className="chatMessage own" key={index}>
                <p>welcome to the group</p>
                <span>1 hour ago</span>
              </div>
            ))}
          </div>
          <div className="bottom">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
