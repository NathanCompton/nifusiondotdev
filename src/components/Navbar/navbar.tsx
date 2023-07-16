import React from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi"
import { TbSquareLetterN } from "react-icons/tb"
import "./navbar.css";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = React.useState(false);
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };
  
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <TbSquareLetterN size={40} />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <HiMenu size={40} />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/dnd">D&D</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;
