import Post from "../Post/Post";
import "./Posts.css";

const Posts = ({ posts }) => {
  console.log(posts);
  
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post._id} post={post}/>
      ))}
    </div>
  );
};

export default Posts;
