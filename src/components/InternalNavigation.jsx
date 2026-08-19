import React from "react";
import { NavLink, useParams } from "react-router-dom";
import data from "../data.json";

export default function InternalNavigation() {
  const { planetName } = useParams();


  const planet = data.find(
    (planet) => planet.name.toLowerCase() === planetName?.toLowerCase()
  );
  return (
    <div className="internal-navigation"
      style={{ "--planet-color": planet?.color }}>
      <ul className="internal-navigation__list">
        <li className="internal-navigation__item">
          <NavLink to={`/${planetName}/overview`} end>
            <span className="number">01</span>
            <p>Overview</p>
            
          </NavLink>
        </li>

        <li className="internal-navigation__item">
          <NavLink to={`/${planetName}/structure`} end>
            <span className="number">02</span>
            <p>Structure</p>
          </NavLink>
        </li>

        <li className="internal-navigation__item">
          <NavLink to={`/${planetName}/surface`} end>
            <span className="number">03</span>
            <p>Surface</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}