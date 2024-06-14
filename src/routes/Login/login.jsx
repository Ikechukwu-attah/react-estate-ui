import "./login.scss";
import { Link } from "react-router-dom";
import { useLogin } from "./useUserLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const { error, mutate, isSuccess, data: resData } = useLogin();
  const [data, setData] = useState({});

  const token = Cookies.get("token");
  console.log("Retrieved token from cookie:", token);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(data);
    isSuccess && setData({});
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={data?.email || ""}
            onChange={(e) => handleChange(e)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={data?.password || ""}
            onChange={(e) => handleChange(e)}
          />
          <button>Login</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
          <p className="error">{error}</p>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
