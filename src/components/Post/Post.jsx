import "./Post.css";
import formatTimeDifference from "./../../utils/formatDate";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.photo && <img src={post.photo} alt="" className="postimg" />}
      <div className="postinfo">
        <div className="postcats">
          {post.categories.map((cat) => (
            <span className="postcat">{cat.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="posttitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postdate">{formatTimeDifference(post.createdAt)}</span>
      </div>
      <p className="postdesc">{post.desc}</p>
    </div>
  );
};

export default Post;
