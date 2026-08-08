import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

export default function Structure() {
  const {planetName } = useParams();

  const planet = data.find(
    (p) => p.name.toLowerCase() === planetName.toLowerCase()
  );

  if (!planet) {
    return <h1>Planet not found</h1>;
  }

  return (
    <div className="structure">
      <div className="structure__inner container">

        <h1 className="structure__item__name">
          {planet.name}
        </h1>

        <img
          src={planet.images.planet}
          alt={planet.name}
          className="structure__item__image"
        />

        <p className="structure__item__content">
          {planet.overview.content}
        </p>

        <a
          href={planet.overview.source}
          target="_blank"
          rel="noopener noreferrer"
          className="structure__item__source"
        >
          Source: Wikipedia
        </a>

        <p>Rotation Time: {planet.rotation}</p>
        <p>Revolution Time: {planet.revolution}</p>
        <p>Radius: {planet.radius}</p>
        <p>Temperature: {planet.temperature}</p>

      </div>
    </div>
  );
}