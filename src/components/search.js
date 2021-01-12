import React from "react";

const style = {
  margin: {
    margin: "20px",
  },
  buttonStyle: {
    boxShadow: "2px 2px 4px #000000",
    margin: "20px",
  },
  inputStyle: {
    border: "2px solid black",
    height: "1.5rem",
    boxShadow: "2px 2px 4px #000000",
  },
};

const SearchFunction = ({ placeholder, handleChange }) => {
  return (
    <div style={style.margin}>
      <input
        style={style.inputStyle}
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchFunction;
