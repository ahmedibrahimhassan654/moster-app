import React, { Component } from "react";
import "./search-box.styles.css";
class SearchBoxComp extends Component {
  render() {
    console.log("get all props from inside SearchBoxComp", this.props);
    const { onsearch } = this.props;

    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onsearch}
        />
      </div>
    );
  }
}

export default SearchBoxComp;
