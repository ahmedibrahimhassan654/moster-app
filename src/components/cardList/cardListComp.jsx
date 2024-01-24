import React, { Component } from "react";
import "./cardlist.css";
class CardListComp extends Component {
  render() {
    console.log("get all monsters from inside card list comp ", this.props);
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}
export default CardListComp;
