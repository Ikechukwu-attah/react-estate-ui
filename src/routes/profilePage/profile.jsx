import React, { Suspense, useContext } from "react";
import "./profile.scss";
import List from "../../components/list/list";
import Chat from "../../components/chat/chat";
import { useLogout } from "./useUserProfile";
import { AuthContext } from "../../context/AuthContex";
import { Await, Link, useLoaderData } from "react-router-dom";

const Profile = () => {
  const { mutate, error } = useLogout();
  const { currentUser } = useContext(AuthContext);
  const data = useLoaderData();
  console.log({ currentUser });
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to={"/update-profile"}>
              {" "}
              <button>Update Profile</button>
            </Link>
          </div>

          <div className="info">
            <span>
              Avatar: <img src="./profile.png" alt="profile pc" />
            </span>
            <span>
              Username: <b>{currentUser?.username}</b>
            </span>
            <span>
              Email: <b>{currentUser?.email}</b>
            </span>

            <button onClick={() => mutate()}>Logout</button>
          </div>

          <div className="title">
            <h1>My List</h1>
            <Link to={"/add-post"}>
              {" "}
              <button>Create New Post</button>
            </Link>
          </div>

          <Suspense fallback={<p>Loading....</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.userPosts} />}
            </Await>
          </Suspense>

          <div className="title">
            <h1>Save List</h1>
          </div>
          <Suspense fallback={<p>Loading....</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Suspense fallback={<p>Loading....</p>}>
            <Await
              resolve={data.chatResponse}
              errorElement={<p>Error loading chat!</p>}
            >
              {(chatResponse) => <Chat chats={chatResponse.data} />}
            </Await>
          </Suspense>
          {/* <Chat /> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
