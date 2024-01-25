import React from "react";
import "./card.style.css";
const Card = ({ id, name, email }) => {
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monsters ${name}`}
        src={`https://robohash.org/${id}?set=set2`}
      />
      <h1>{name}</h1>
      <h1>{email}</h1>
    </div>
  );
};

export default Card;
