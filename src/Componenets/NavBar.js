import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars, FaShoppingCart, FaPowerOff } from "react-icons/fa";
import "../Styles/main.css";
import { useDispatch } from "react-redux";
import { setEmail, setLogin, setPassword, setUsername } from "../redux/reducer";

export default function NavBar() {
  const navRef = useRef();
  const dispatch = useDispatch();

  const ShowNavBar = () => {
    navRef.current.classList.add("responsive_nav");
    // navRef.current.classList.toggle("responsive_nav");
  };
  const HideNavBar = () => {
    navRef.current.classList.remove("responsive_nav");
    // navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h1>
        <Link className="logoTitle" to="/">
          The Shop
        </Link>
      </h1>
      <nav ref={navRef}>
        <Link to="/" onClick={HideNavBar}>
          Home
        </Link>
        <Link to="/profile" onClick={HideNavBar}>
          Profile
        </Link>
        <Link to="/about" onClick={HideNavBar}>
          About
        </Link>
        <button className="nav-btn nav-close-btn" onClick={HideNavBar}>
          <FaTimes />
        </button>
      </nav>
      <div>
        <Link to="/cart">
          <button className="cart-btn">
            <FaShoppingCart />
          </button>
        </Link>
        <button
          className="cart-btn"
          onClick={() => {
            // prompt("Are You Sure Want To Log Out?");
            const choice = window.confirm("Are You Sure Want To Log Out?");
            if (choice) {
              dispatch(setUsername(""));
              dispatch(setEmail(""));
              dispatch(setPassword(""));
              dispatch(setLogin(false));
            }
          }}
        >
          <FaPowerOff />
        </button>
        <button className="nav-btn" onClick={ShowNavBar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}
