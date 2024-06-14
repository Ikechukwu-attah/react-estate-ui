import { useContext, useEffect, useState } from "react";
import "./profileUpdate.scss";
import { AuthContext } from "../../context/AuthContex";
import { useUserProfileUpdate } from "./useUserProfileUpdate";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

const ProfileUpdatePage = () => {
  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState(currentUser || {});
  const { mutate, error, isSuccess } = useUserProfileUpdate();
  const [avatar, setAvatar] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setData(currentUser || {});
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...data, avatar: avatar[0] };
    mutate(newData);
  };
  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={data?.username || ""}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={data?.email || ""}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div> */}
          <button type="submit">Update</button>
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={avatar[0] || currentUser?.avatar || "./noavatar.jpg"}
          alt="user image"
          className="avatar"
          name="avatar"
        />

        <UploadWidget
          uwConfig={{
            cloudName: "drzzy49rr",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
