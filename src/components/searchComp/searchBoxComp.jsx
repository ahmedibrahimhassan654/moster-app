import React, { Component } from "react";
import "./search-box.styles.css";
class SearchBoxComp extends Component {
  render() {
    // console.log("get all props from inside SearchBoxComp", this.props);
    const { onsearch, placeholder } = this.props;

    return (
      <div>
        <input
          name="search-box"
          className="search-box"
          type="search"
          placeholder={placeholder}
          onChange={onsearch}
        />
      </div>
    );
  }
}

export default SearchBoxComp;
