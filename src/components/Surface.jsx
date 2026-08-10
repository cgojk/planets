import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import linksource from "../assets/icon-source.svg";

export default function Surface() {
  const {planetName } = useParams();

  const planet = data.find(
    (p) => p.name.toLowerCase() === planetName.toLowerCase()
  );

  if (!planet) {
    return <h1>Planet not found</h1>;
  }

  return (
    <section className="overview ">
      <div className="overview__inner container">

       

        <img
          src={planet.images.geology}
          alt={planet.name}
          className="overview__item__image"
        />

         <h1 className="overview__item__name">
          {planet.name}
        </h1>

        <p className="overview__item__content">
          {planet.geology.content}
        </p>

        <a
          href={planet.geology.source}
          target="_blank"
          rel="noopener noreferrer"
          className="overview__item__source"
        >
          Source: <span className="overview__item__source__link"
          >Wikipedia
          <img src={linksource} alt="link source" className="link__source__icon" />
          </span>
        </a>
   </div>
      <ul className="overview__item__details">
       <li className="item__result"> <p className="item__detail">Rotation Time</p><span className="result time_rotation"> {planet.rotation}</span></li>
        <li className="item__result"><p className="item__detail">Revolution Time</p><span className="result time_revolution"> {planet.revolution}</span></li>
        <li className="item__result"><p className="item__detail">Radius</p><span className="result radius"> {planet.radius}</span></li>
        <li className="item__result"><p className="item__detail">Temperature</p><span className="result temperature"> {planet.temperature}</span></li>
      </ul>

   
    </section>
  );
}