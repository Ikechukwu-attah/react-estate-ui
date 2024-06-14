import React, { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContex";
import { useNotificationStore } from "../../lib/notificationStore";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState(true);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  fetch();

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="logo.png" alt="logo" />
          <span>TonyEstate</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="./profile.png" alt="" />
            <span>{currentUser?.username}</span>
            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}

              <span> Profile</span>
            </Link>
          </div>
        ) : (
          <>
            {" "}
            <a href="">Sign In</a>
            <a href="/" className="register">
              SignUp
            </a>
          </>
        )}

        <div className="menuIcon" onClick={() => setOpen(!open)}>
          <img src="/menu.png" alt="menu icon" />
        </div>

        <div className={open ? "mobile-menu active" : "mobile-menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign In</a>
          <a href="">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
