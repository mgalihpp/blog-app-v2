import "./Singlepost.css";

const Singlepost = () => {
  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        <img
          src="https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg"
          alt=""
          className="singlepostimg"
        />
        <h1 className="singleposttitle">
          Lorem ipsum dolor sit amet
          <div className="singlepostedit">
            <i className="singleposticon far fa-edit"></i>
            <i className="singleposticon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlepostinfo">
          <span className="singlepostauthor">
            Author: <b>Galih</b>
          </span>
          <span className="singlepostdate">1 hour ago</span>
        </div>
        <p className="singlepostdesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque a
          mollitia sapiente voluptatum quae eius cupiditate nihil. Ut dicta
          voluptatibus id magni iure magnam laboriosam pariatur non praesentium
          culpa!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque a
          mollitia sapiente voluptatum quae eius cupiditate nihil. Ut dicta
          voluptatibus id magni iure magnam laboriosam pariatur non praesentium
          culpa!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque a
          mollitia sapiente voluptatum quae eius cupiditate nihil. Ut dicta
          voluptatibus id magni iure magnam laboriosam pariatur non praesentium
          culpa!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque a
          mollitia sapiente voluptatum quae eius cupiditate nihil. Ut dicta
          voluptatibus id magni iure magnam laboriosam pariatur non praesentium
          culpa!
        </p>
      </div>
    </div>
  );
};

export default Singlepost;
