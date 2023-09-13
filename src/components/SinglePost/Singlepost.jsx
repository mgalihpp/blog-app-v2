import { Link, useParams } from "react-router-dom";
import "./Singlepost.css";
import { useEffect, useState } from "react";
import axios from "axios";
import formatTimeDifference from "./../../utils/formatDate";

const Singlepost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  console.log(postId);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${postId}`);
      const data = res.data;
      setPost(data.post);
    };
    getPost();
  }, [postId]);

  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlepostimg" />
        )}
        <h1 className="singleposttitle">
          {post.title}
          <div className="singlepostedit">
            <i className="singleposticon far fa-edit"></i>
            <i className="singleposticon far fa-trash-alt"></i>
          </div>
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
        <p className="singlepostdesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default Singlepost;
