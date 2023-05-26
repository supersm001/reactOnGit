import React, { useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "../Styles/main.css";

export default function NavBar() {
  const navRef = useRef();

  const ShowNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Work</a>
        <a href="/#">Blog</a>
        <a href="/#">About</a>
        <button className="nav-btn nav-close-btn" onClick={ShowNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={ShowNavBar}>
        <FaBars />
      </button>
    </header>
  );
}
