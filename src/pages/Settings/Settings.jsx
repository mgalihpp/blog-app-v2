import "./Settings.css";
import Sidebar from "./../../components/Sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingswrapper">
        <div className="settingstitle">
          <span className="settingsupdatetitle">Update Your Account</span>
          <span className="settingdeletetitle">Delete Your Account</span>
        </div>
          <form action="" className="settingsform">
            <label>Profile Picture</label>
            <div className="settingspp">
              <img
                src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg"
                alt=""
              />
              <label htmlFor="fileinput">
                <i className="settingsppicon far fa-user-circle"></i>
              </label>
              <input type="file" id="fileinput" style={{ display: "none" }} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="galih" />
            <label>Email</label>
            <input type="text" placeholder="email@aaa.com" />
            <label>Passoword</label>
            <input type="text" placeholder="123" />
            <button className="settingssubmit">Update</button>
          </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
