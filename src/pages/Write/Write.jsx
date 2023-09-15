import { useContext, useState } from "react";
import "./Write.css";
import axios from "axios";
import { Context } from "./../../context/Context";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const { user } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.error(error);
      }
    }
    try {
      const res = await axios.post("posts", newPost);
      navigate("/post/" + res.data._id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="write">
      {file && (
        <img src={URL.createObjectURL(file)} alt="" className="writeimg" />
      )}
      <form action="" className="writeform" onSubmit={handleSubmit}>
        <div className="writeformgroup">
          <label htmlFor="fileinput">
            <i className="writeicon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileinput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeinput"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus={true}
          />
        </div>
        <div className="writeformgroup">
          <textarea
            type="text"
            placeholder="Tell your story..."
            className="writeinput writetext"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writesubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
