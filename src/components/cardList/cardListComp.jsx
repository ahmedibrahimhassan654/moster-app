import React, { Component } from "react";

class CardListComp extends Component {
  render() {
    console.log("get all monsters from inside card list comp ", this.props);
    const { monsters } = this.props;


    
    return monsters.map((monster) => {
      return <h1 key={monster.id}>{monster.name}</h1>;
    });
  }
}
export default CardListComp;
