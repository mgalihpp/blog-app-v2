import "./Navbar.css";

const Navbar = () => {
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
          <li className="toplistitem">HOME</li>
          <li className="toplistitem">ABOUT</li>
          <li className="toplistitem">CONTACT</li>
          <li className="toplistitem">WRITE</li>
          <li className="toplistitem">LOGOUT</li>
        </ul>
      </div>
      <div className="topright">
        <img
          src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg"
          alt=""
          className="topimg"
        />
        <i className="topsearchicon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Navbar;
