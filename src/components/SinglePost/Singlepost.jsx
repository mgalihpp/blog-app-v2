import { Link, useNavigate, useParams } from "react-router-dom";
import "./Singlepost.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import formatTimeDifference from "./../../utils/formatDate";
import { Context } from "./../../context/Context";

const Singlepost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [UpdateMode, setUpdateMode] = useState(false);
  const navigate = useNavigate();

  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${postId}`);
      const data = res.data;
      setPost(data.post);
      setTitle(data.post.title);
      setDesc(data.post.desc);
    };
    getPost();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`, {
        data: { username: user.username },
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${postId}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {UpdateMode && (
        <dialog open>
          <h1 style={{ textAlign: "center" }}>Update Post</h1>
          <label style={{ fontSize: "20px" }}>Title:</label>
          <input
            type="text"
            placeholder="Title"
            className="writeinput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus={true}
          />
          <label style={{ fontSize: "20px" }}>Description:</label>
          <textarea
            type="text"
            placeholder="Tell your story..."
            className="writeinput writetext"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button onClick={handleUpdate}>Update</button>
        </dialog>
      )}
      <div className="singlepost">
        <div className="singlepostwrapper">
          {post.photo && (
            <img src={PF + post.photo} alt="" className="singlepostimg" />
          )}
          <h1 className="singleposttitle">
            {title}
            {post.username === user?.username && (
              <div className="singlepostedit">
                <i
                  className="singleposticon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singleposticon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
          <div className="singlepostinfo">
            <span className="singlepostauthor">
              Author:
              <Link to={`/?user=${post.username}`}>
                <b>{post.username}</b>
              </Link>
            </span>
            <span className="singlepostdate">
              {formatTimeDifference(post.createdAt)}
            </span>
          </div>
          <p className="singlepostdesc">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Singlepost;
