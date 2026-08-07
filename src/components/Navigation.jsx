
import hamburguer from "../assets/icon-hamburger.svg";
import { useEffect,useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import React from "react";

export default function Navigation() {

const [menuOpen, setMenuOpen] = useState(false);



  return (
<>

    <header className="header ">
      <div className="header__inner container">

        <Link to="/earth" className="nav-logo-link">
          <h1 className="nav-logo">Planets</h1> 
        </Link>

        <nav
          className={`navigation ${menuOpen ? "open" : ""}`}
          aria-label="homepage Navigation"
        >

          <ul className="nav__list">

            <li className="nav__items">
              <NavLink to="/earth" className="nav__items__links">
               Earth
              </NavLink>
            </li>

            <li className="nav__items">
              <NavLink to="/mercury" className="nav__items__links">
              Mercury
              </NavLink>
            </li>

            <li className="nav__items">
              <NavLink to="/venus" className="nav__items__links">
            Venus
              </NavLink>
            </li>

            <li className="nav__items">
              <NavLink to="/mars" className="nav__items__links">
            Mars
              </NavLink>
            </li>

            
            <li className="nav__items">
              <NavLink to="/jupiter" className="nav__items__links">
            Jupiter
              </NavLink>
            </li>

            <li className="nav__items">
              <NavLink to="/saturn" className="nav__items__links">
            Saturn
              </NavLink>
            </li>

            <li className="nav__items">
              <NavLink to="/uranus" className="nav__items__links">
            Uranus
              </NavLink>
            </li>
            <li className="nav__items">
              <NavLink to="/neptune" className="nav__items__links">
            Neptune
              </NavLink>
            </li>


          </ul>
     
        </nav>

        <button
          className="menu-btn"
          aria-label="toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <img src={hamburguer} alt="Open menu" />}
        </button>

      </div>
      
    </header>
    </>

  );
}

