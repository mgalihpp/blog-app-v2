import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const user = false;
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
          <li className="toplistitem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <img
            src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg"
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
