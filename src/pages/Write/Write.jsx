import "./Write.css";

const Write = () => {
  return (
    <div className="write">
      <img
        src="https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg"
        alt=""
        className="writeimg"
      />
      <form action="" className="writeform">
        <div className="writeformgroup">
          <label htmlFor="fileinput">
            <i className="writeicon fas fa-plus"></i>
          </label>
          <input type="file" id="fileinput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeinput"
            autoFocus={true}
          />
        </div>
        <div className="writeformgroup">
          <textarea
            type="text"
            id=""
            placeholder="Tell your story..."
            className="writeinput writetext"
          ></textarea>
        </div>
        <button className="writesubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
