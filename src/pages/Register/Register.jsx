import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      return res.data && navigate("/login");
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  return (
    <div className="register">
      <span className="registertitle">Register</span>
      <form action="" className="registerform" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerinput"
          type="text"
          placeholder="Enter your Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerinput"
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerinput"
          type="password"
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-btn" type="submit">
          Register
        </button>
      </form>
      <button className="loginbtn">
        <Link to="/login">Login</Link>
      </button>
      {error && <span style={{ color: 'red', marginTop: 2}}>Username already used</span>}
    </div>
  );
};

export default Register;
