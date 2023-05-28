import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Styles/register.css";
import { FaUserCircle, FaUserAlt, FaUnlockAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BiRightArrowAlt } from "react-icons/bi";
import { setEmail, setLogin, setPassword, setUsername } from "../redux/reducer";
import { Link } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const [tUsername, setTUsername] = useState("");
  const [tEmail, setTEmail] = useState("");
  const [tPassword, setTPassword] = useState("");

  const RegisterHandler = () => {
    if (tUsername != "" && tEmail != "" && tPassword != "") {
      dispatch(setUsername(tUsername));
      dispatch(setEmail(tEmail));
      dispatch(setPassword(tPassword));
      dispatch(setLogin(true));
      window.location = "/";
    } else {
      alert("Please Enter Username, Eamil & Password!!!");
    }
  };

  return (
    <div className="container">
      <div className="createBox">
        <FaUserCircle className="createIcon" />
        <h1 className="heading">Create Account!</h1>
        <p className="subHeading">Signing Up For Account</p>
        <div className="inputSec">
          <p className="inputLabel">Username</p>
          <div className="inputDiv">
            <input
              type="text"
              className="inputBox"
              onChange={(e) => {
                setTUsername(e.target.value);
              }}
            />
            <FaUserAlt className="inputIcon" />
          </div>
        </div>
        <div className="inputSec">
          <p className="inputLabel">Email</p>
          <div className="inputDiv">
            <input
              type="text"
              className="inputBox"
              onChange={(e) => {
                setTEmail(e.target.value);
              }}
            />
            <GrMail className="inputIcon" />
          </div>
        </div>
        <div className="inputSec">
          <p className="inputLabel">Password</p>
          <div className="inputDiv">
            <input
              type="password"
              className="inputBox"
              onChange={(e) => {
                setTPassword(e.target.value);
              }}
            />
            <FaUnlockAlt className="inputIcon" />
          </div>
        </div>
        {/* <div className="forgetPasswordDiv">
          <p className="forgetPassword">Forget Password?</p>
        </div> */}
        <div className="submitDiv">
          <button
            className="createButton"
            onClick={() => {
              RegisterHandler();
            }}
          >
            Create
            <BiRightArrowAlt style={{ fontSize: 25 }} />
          </button>
        </div>
        <div className="createAccountLinkDiv">
          <Link className="decoNone" to="/login">
            <p className="forgetPassword">Already Have an Account? Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
