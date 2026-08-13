
import hamburguer from "../assets/icon-hamburger.svg";
import { useEffect,useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import data from "../data.json";
import chevron from "../assets/icon-chevron.svg";
export default function Navigation() {


const [menuOpen, setMenuOpen] = useState(false);



  return (
<>

    <header className="header ">
      <div className="header__inner container">

        <Link to="/earth/overview" className="nav-logo-link">
          <h1 className="nav-logo">Planets</h1> 
        </Link>

        <nav
          className={`navigation ${menuOpen ? "open" : ""}`}
          aria-label="homepage Navigation"
        >
{data.map((planet) => (
  <ul className="nav__list" key={planet.name}>
    <li className="nav__items">
      <div className="circle__color--planet" style={{ backgroundColor: planet.color }}></div>
      <NavLink to={`/${planet.name.toLowerCase()}/overview`} className="nav__items__links"

      >
        {planet.name}
      <img src={chevron} alt="chevron" className="chevron__icon" />
      </NavLink>
    </li>
  </ul>
))}
          {/* <ul className="nav__list">


            <li className="nav__items">
              <div className="circle__color--planet"
             
              ></div>
              <NavLink to="/earth/overview" className="nav__items__links">

               Earth
              </NavLink>
            </li>

            <li className="nav__items">
              <div className="circle__color--planet"></div>
              <NavLink to="/mercury/overview" className="nav__items__links">
              Mercury
              </NavLink>
            </li>

            <li className="nav__items">
              <div className="circle__color--planet"></div>
              <NavLink to="/venus/overview" className="nav__items__links">
            Venus
              </NavLink>
            </li>

            <li className="nav__items">
              <div className="circle__color--planet"></div>
              <NavLink to="/mars/overview" className="nav__items__links">
            Mars
              </NavLink>
            </li>

            
            <li className="nav__items">
              <div className="circle__color--planet"></div>
              <NavLink to="/jupiter/overview" className="nav__items__links">
            Jupiter
              </NavLink>
            </li>

            <li className="nav__items">
              <div className="circle__color--planet"></div>
              <NavLink to="/saturn/overview" className="nav__items__links">
            Saturn
              </NavLink>
            </li>

            <li className="nav__items">
              <div className="circle__color--planet"></div>
              <NavLink to="/uranus/overview" className="nav__items__links">
            Uranus
              </NavLink>
            </li>
            <li className="nav__items">
              <div className="circle__color--planet"></div>
              <NavLink to="/neptune/overview" className="nav__items__links">
            Neptune
              </NavLink>
            </li>


          </ul>
      */}
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

