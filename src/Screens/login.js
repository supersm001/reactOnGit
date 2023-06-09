import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Styles/login.css";
import { FaSignInAlt, FaUserAlt, FaUnlockAlt } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import { setLogin, setPassword, setUsername } from "../redux/reducer";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [tUsername, setTUsername] = useState("");
  const [tPassword, setTPassword] = useState("");

  const LoginHandler = () => {
    if (tUsername != "" && tPassword != "") {
      dispatch(setUsername(tUsername));
      dispatch(setPassword(tPassword));
      dispatch(setLogin(true));
    } else {
      alert("Please Enter Username & Password!!!");
    }
  };

  return (
    <div className="container">
      <div className="loginBox">
        <FaSignInAlt className="loginIcon" />
        <h1 className="heading">Welcome!</h1>
        <p className="subHeading">Sign In to your Account</p>
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
        <div className="forgetPasswordDiv">
          <p className="forgetPassword">Forget Password?</p>
        </div>
        <div className="submitDiv">
          <button
            className="loginButton"
            onClick={() => {
              LoginHandler();
            }}
          >
            Login
            <BiRightArrowAlt style={{ fontSize: 25 }} />
          </button>
        </div>
        <div className="createAccountLinkDiv">
          <Link className="decoNone" to="/register">
            <p className="forgetPassword">Don't Have an Account? Click Here</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
