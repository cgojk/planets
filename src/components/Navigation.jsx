
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

<header className="header">
<div className="header__inner container">

        <Link to="/earth/overview" className="nav-logo-link">
          <h1 className="nav-logo">The Planets</h1> 
        </Link>

<nav
     id="planet-navigation"
      className={`navigation ${menuOpen ? "open" : ""}`}
      aria-label="Planet navigation"
      aria-hidden={!menuOpen}
       inert={!menuOpen ? "" : undefined}
     
      >

<ul className="nav__list">
  {data.map((planet) => (
    <li
      className="nav__items"
      key={planet.name}
      style={{ "--planet-color": planet.color }}
    >
      <div
        className="circle__color--planet"
        style={{ backgroundColor: planet.color }}
    />


      <NavLink
        to={`/${planet.name.toLowerCase()}/overview`}
        className="nav__items__links"
        onClick={() => setMenuOpen(false)}
      >
        {planet.name}
    
          <img
            src={chevron}
            alt=""
            className="chevron__icon"
          />
      
      </NavLink>
  
    </li>
  ))}
</ul>
 
        </nav>

        <button
         className="menu-btn"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
       aria-controls="planet-navigation"
       onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <img src={hamburguer} alt="Open menu" />}
        </button>

      </div>
      
    </header>
    </>

  );
}
