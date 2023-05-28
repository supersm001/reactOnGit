import React from "react";
import "../Styles/profile.css";
import { useSelector } from "react-redux";

const Profile = () => {
  const { username } = useSelector((state) => state.userDataReducer);
  return (
    <div className="profileContainer">
      <div className="card">
        <div className="text">
          <img src={require("../images/userIcon.png")} alt="" />
          <h3>Hi {username}</h3>
          {/* <p>Student | Coder</p> */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
