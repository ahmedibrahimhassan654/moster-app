import React, { Component } from "react";
import "./cardlist.css";
import Card from "../card/Card";
class CardListComp extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, id, email } = monster;
          return <Card name={name} id={id} email={email} key={id} />;
        })}
      </div>
    );
  }
}
export default CardListComp;
