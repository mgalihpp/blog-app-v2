import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Navbar = () => {
  const { user, dispacth} = useContext(Context);

  const handleLogout = () => {
    dispacth({type: "LOGOUT"})
  }

  return (
    <div className="top">
      <div className="topleft">
        <i className="topicon fab fa-facebook-square"></i>
        <i className="topicon fab fa-twitter-square"></i>
        <i className="topicon fab fa-pinterest-square"></i>
        <i className="topicon fab fa-instagram-square"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitem">
            <Link to="/">HOME</Link>
          </li>
          <li className="toplistitem">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="toplistitem">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="toplistitem">
            <Link to="/write">WRITE</Link>
          </li>
          <li className="toplistitem" onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <img
            src={user.profile}
            alt=""
            className="topimg"
          />
        ) : (
          <ul className="toplist">
            <li className="toplistitem">
              <Link to="/login">LOGIN</Link>
            </li>
            <li className="toplistitem">
              <Link to="/register">REGISTER</Link>
            </li>
          </ul>
        )}
        <i className="topsearchicon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Navbar;
