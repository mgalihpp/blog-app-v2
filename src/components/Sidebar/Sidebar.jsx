import "./Sidebar.css";

const Sidebar = () => {
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
          <li className="sidebarlistitem">Life</li>
          <li className="sidebarlistitem">Music</li>
          <li className="sidebarlistitem">Style</li>
          <li className="sidebarlistitem">Sport</li>
          <li className="sidebarlistitem">Tech</li>
          <li className="sidebarlistitem">Cinema</li>
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
