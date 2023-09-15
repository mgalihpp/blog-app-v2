import { useEffect, useState } from "react";
import "./Sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      const data = await res.data;
      setCats(data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">ABOUT ME</span>
        <img
          src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
          quas? Aut ducimus quaerat ad, necessitatibus quibusdam, illo ipsa quas
          non magnam placeat fugiat qui voluptatibus tenetur veritatis vero
          libero molestiae.
        </p>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">CATEGORIES</span>
        <ul className="sidebarlist">
          {cats.map((cat) => (
            <Link key={cat._id} to={`/?cat=${cat.name}`}>
            <li className="sidebarlistitem">
              {cat.name}
            </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW US</span>
        <div className="sidebarsocial">
          <i className="sidebaricon fab fa-facebook-square"></i>
          <i className="sidebaricon fab fa-twitter-square"></i>
          <i className="sidebaricon fab fa-pinterest-square"></i>
          <i className="sidebaricon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
