import React, { Component } from "react";
import "./card.style.css";
export default class Card extends Component {
  render() {
    const { id, name, email } = this.props;
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
  }
}
