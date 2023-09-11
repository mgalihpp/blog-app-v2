import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div className="register">
      <span className="registertitle">Register</span>
      <form action="" className="registerform">
        <label>Username</label>
        <input
          className="registerinput"
          type="text"
          placeholder="Enter your Username"
        />
        <label>Email</label>
        <input
          className="registerinput"
          type="text"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          className="registerinput"
          type="password"
          placeholder="Enter your Password"
        />
        <button className="register-btn">Register</button>
      </form>
      <button className="loginbtn">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};

export default Register;
