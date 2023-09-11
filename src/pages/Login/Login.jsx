import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <span className="logintitle">Login</span>
      <form action="" className="loginform">
        <label>Email</label>
        <input
          className="logininput"
          type="text"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          className="logininput"
          type="password"
          placeholder="Enter your Password"
        />
        <button className="login-btn">Login</button>
      </form>
      <button className="registerbtn">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
};

export default Login;
