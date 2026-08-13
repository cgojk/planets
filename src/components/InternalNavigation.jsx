import React from "react";
import { Link, useParams } from "react-router-dom";

export default function InternalNavigation() {
  const { planetName } = useParams();

  return (
    <div className="internal-navigation">
      <ul className="internal-navigation__list">
        <li className="internal-navigation__item">
          <Link to={`/${planetName}/overview`}>
            Overview
          </Link>
        </li>

        <li className="internal-navigation__item">
          <Link to={`/${planetName}/structure`}>
            Structure
          </Link>
        </li>

        <li className="internal-navigation__item">
          <Link to={`/${planetName}/surface`}>
            Surface
          </Link>
        </li>
      </ul>
    </div>
  );
}