import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

export default function Overview() {
  const {planetName } = useParams();

  const planet = data.find(
    (p) => p.name.toLowerCase() === planetName.toLowerCase()
  );

  if (!planet) {
    return <h1>Planet not found</h1>;
  }

  return (
    <section className="overview">
      <div className="overview__inner container">

       

        <img
          src={planet.images.planet}
          alt={planet.name}
          className="overview__item__image"
        />

         <h1 className="overview__item__name">
          {planet.name}
        </h1>

        <p className="overview__item__content">
          {planet.overview.content}
        </p>

        <a
          href={planet.overview.source}
          target="_blank"
          rel="noopener noreferrer"
          className="overview__item__source"
        >
          Source: Wikipedia
        </a>
   </div>
      <div className="overview__item__details">
        <p className="item__detail">Rotation Time: {planet.rotation}</p>
        <p className="item__detail">Revolution Time: {planet.revolution}</p>
        <p className="item__detail">Radius: {planet.radius}</p>
        <p className="item__detail">Temperature: {planet.temperature}</p>
      </div>

   
    </section>
  );
}