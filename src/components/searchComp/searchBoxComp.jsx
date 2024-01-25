import React, { Component } from "react";
import "./search-box.styles.css";
const SearchBoxComp = ({ onsearch, placeholder }) => {
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
};

export default SearchBoxComp;
