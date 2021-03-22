
import React from 'react';

const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem"
};
const SearchBox = {
    padding: "2em",
    background: "cornsilk",
    //height: "100vh"
}

const center = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
}

const SearchBar = ({ keyword, setKeyword }) => {
    return (
        <div className="searchBox" style={SearchBox}>
            <div style={center}>
                <h2>Find a Book</h2>
            </div>
            <div style={center}>
                <input
                    style={BarStyling}
                    value={keyword}
                    placeholder={"Search a Book or Author"}
                    onChange={(e) => setKeyword(e.target.value)}
                /></div>
        </div>

    );
}

export default SearchBar;