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
            Overview
          </NavLink>
        </li>

        <li className="internal-navigation__item">
          <NavLink to={`/${planetName}/structure`} end>
            Structure
          </NavLink>
        </li>

        <li className="internal-navigation__item">
          <NavLink to={`/${planetName}/surface`} end>
            Surface
          </NavLink>
        </li>
      </ul>
    </div>
  );
}