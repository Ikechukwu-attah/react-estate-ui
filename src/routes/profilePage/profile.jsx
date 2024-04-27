import React from "react";
import "./profile.scss";
import List from "../../components/list/list";
import Chat from "../../components/chat/chat";
const Profile = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>

          <div className="info">
            <span>
              Avatar: <img src="./profile.png" alt="profile pc" />
            </span>
            <span>
              Username: <b>Jame Bolton</b>
            </span>
            <span>
              Email: <b>jame@gmail.com</b>
            </span>
          </div>

          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Save List</h1>
          </div>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Profile;
