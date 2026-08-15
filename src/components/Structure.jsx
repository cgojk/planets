import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import linksource from "../assets/icon-source.svg";
import InternalNavigation from "./InternalNavigation";

export default function Structure() {
  const {planetName } = useParams();

  const planet = data.find(
    (planet) => planet.name.toLowerCase() === planetName?.toLowerCase()
  );

  if (!planet) {
    return <h1>Planet not found</h1>;
  }

  return (
    <section className="general__planet-characteristics ">
      <div className="general__inner container">

        <InternalNavigation />
          <div className="image__container">
        <img
          src={planet.images.internal}
          alt={planet.name}
          className="general__item__image"
         
        />
        </div>
        <div className="wrapper__general--details">

         <h1 className="general__item__name">
          {planet.name}
        </h1>

        <p className="general__item__content">
          {planet.structure.content}
        </p>

        <a
          href={planet.structure.source}
          target="_blank"
          rel="noopener noreferrer"
          className="general__item__source"
        >
          Source: <span className="general__item__source__link"
          >Wikipedia
          <img src={linksource} alt="link source" className="link__source__icon" />
          </span>
        </a>
        </div>
   </div>
      <ul className="general__item__details">
       <li className="item__result"> <p className="item__detail">Rotation Time</p><span className="result time_rotation"> {planet.rotation}</span></li>
        <li className="item__result"><p className="item__detail">Revolution Time</p><span className="result time_revolution"> {planet.revolution}</span></li>
        <li className="item__result"><p className="item__detail">Radius</p><span className="result radius"> {planet.radius}</span></li>
        <li className="item__result"><p className="item__detail">Temperature</p><span className="result temperature"> {planet.temperature}</span></li>
      </ul>

   
    </section>
  );
}