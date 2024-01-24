import React, { Component } from "react";
import "./cardlist.css";
import Card from "../card/Card";
class CardListComp extends Component {
  render() {
    console.log("get all monsters from inside card list comp ", this.props);
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, id, email } = monster;
          return (
            <Card name={name} id={id} email={email} />
            // <div className="card-container" key={id}>
            //   <img
            //     alt={`monsters ${name}`}
            //     src={`https://robohash.org/${id}?set=set2`}
            //   />
            //   <h1>{name}</h1>
            //   <h1>{email}</h1>
            // </div>
          );
        })}
      </div>
    );
  }
}
export default CardListComp;
