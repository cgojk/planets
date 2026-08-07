// import earth from "../assets/planet-earth.svg";
// import mercury from "../assets/planet-mercury.svg";
// import venus from "../assets/planet-venus.svg";
// import mars from "../assets/planet-mars.svg";
// import jupiter from "../assets/planet-jupiter.svg";
// import saturn from "../assets/planet-saturn.svg";
// import uranus from "../assets/planet-uranus.svg";
// import neptune from "../assets/planet-neptune.svg";
import { NavLink } from "react-router-dom";
import React from "react";
import planets from "../data.json";


export default function Overview() {
  return (
    <div className="overview">
        <div className="overview__inner container">
            {planets.map((planet) => (
                <NavLink to={`/${planet.name.toLowerCase()}`} key={planet.name} className="overview__item">
                    <h1 className="overview__item__name">{planet.name}</h1>
                    <img src={planet.image} alt={planet.name} className="overview__item__image" />
                    <p className="overview__item__content">{planet.overview.content}</p>
                    <a href={planet.overview.source} target="_blank" rel="noopener noreferrer" className="overview__item__source">
                        Source: Wikipedia
                    </a>
                    <p className="overview__item__rotation">Rotation Time: {planet.rotation}</p>
                    <p className="overview__item__revolution">Revolution Time: {planet.revolution}</p>
                    <p className="overview__item__radius">Radius: {planet.radius}</p>
                </NavLink>
              
            ))}


        </div>
    </div>
  );
}

