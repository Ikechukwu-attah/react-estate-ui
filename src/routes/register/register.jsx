import { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import { useRegistration } from "./useUserRegistration";

const Register = () => {
  const [data, setData] = useState({});
  const { register, data: userData, error, isLoading } = useRegistration();

  console.log(userData);
  console.log(error);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(data);

    console.log(data);
  };
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={data?.username}
            onChange={(e) => handleChange(e)}
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={data?.email}
            onChange={(e) => handleChange(e)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={data?.password}
            onChange={(e) => handleChange(e)}
          />
          <button>Register</button>
          <Link to="/login">Do you have an account?</Link>
          <p className="error">{error}</p>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Register;
