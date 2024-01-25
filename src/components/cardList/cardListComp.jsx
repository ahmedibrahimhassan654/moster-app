import React from "react";
import "./cardlist.css";
import Card from "../card/Card";
const CardListComp = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { name, id, email } = monster;
        return <Card name={name} id={id} email={email} key={id} />;
      })}
    </div>
  );
};

export default CardListComp;
