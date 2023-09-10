import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headertitle">
        <span className="headertitlesm">React & node</span>
        <span className="headertitlelg">BLog</span>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg"
        alt=""
        className="headerimg"
      />
    </div>
  );
};

export default Header;
