import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg"
        alt=""
        className="postimg"
      />
      <div className="postinfo">
        <div className="postcats">
          <span className="postcat">Music</span>
          <span className="postcat">Life</span>
        </div>
        <span className="posttitle">
          Lorem ipsum dolor
          <hr />
        </span>
        <span className="postdate">1hour ago</span>
      </div>
      <p className="postdesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi
        voluptate perferendis in corporis est libero ipsam atque, nisi unde
        debitis itaque provident repudiandae. Illo optio mollitia suscipit ad
        recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Autem eligendi voluptate perferendis in corporis est libero ipsam atque,
        nisi unde debitis itaque provident repudiandae. Illo optio mollitia
        suscipit ad recusandae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Autem eligendi voluptate perferendis in corporis est
        libero ipsam atque, nisi unde debitis itaque provident repudiandae. Illo
        optio mollitia suscipit ad recusandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Autem eligendi voluptate perferendis in
        corporis est libero ipsam atque, nisi unde debitis itaque provident
        repudiandae. Illo optio mollitia suscipit ad recusandae.
      </p>
    </div>
  );
};

export default Post;
