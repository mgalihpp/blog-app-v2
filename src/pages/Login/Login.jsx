import { Link } from "react-router-dom";
import "./Login.css";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispacth, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispacth({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispacth({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispacth({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="logintitle">Login</span>
      <form action="" className="loginform" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="logininput"
          type="text"
          placeholder="Enter your username"
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="logininput"
          type="password"
          placeholder="Enter your Password"
          ref={passwordRef}
        />
        <button className="login-btn" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="registerbtn">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
};

export default Login;
