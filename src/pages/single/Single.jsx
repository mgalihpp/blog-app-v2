import "./Single.css";
import Sidebar from "./../../components/Sidebar/Sidebar";
import Singlepost from "../../components/SinglePost/Singlepost";

const Single = () => {
  return (
    <div className="single">
      {/* POST */}
      <Singlepost />
      <Sidebar />
    </div>
  );
};

export default Single;
