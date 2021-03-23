import React from "react";
import "./style.css";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <div className="searchBox">
      <div className="center">
        <h2>Find a Book</h2>
      </div>
      <div className="center">
        <input
          className="barStyling"
          value={keyword}
          placeholder={"Search a Book or Author"}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
