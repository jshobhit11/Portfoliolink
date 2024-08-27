import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>
          <a href="./index.html">Shobhit Jain</a>
        </h1>
      </div>
      <div className={`navbar-right ${isOpen ? "open" : ""}`}>
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={toggleNavbar}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={toggleNavbar}
          >
            About
          </NavLink>
          <NavLink
            to="/experiences"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={toggleNavbar}
          >
            Experiences
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={toggleNavbar}
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={toggleNavbar}
          >
            Skills
          </NavLink>
          <NavLink
            to="https://drive.google.com/file/d/1SbGnyL_cD-sYcAuM6AyfaJYQkM4vyvQP/view?usp=sharing"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={toggleNavbar}
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={toggleNavbar}
          >
            Contact
          </NavLink>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
