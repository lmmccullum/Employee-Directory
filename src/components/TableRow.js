import React, { Component } from "react";

const style = {
  TableContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#008891",
    border: "2px solid black",
    borderRadius: "10px",
    cursor: "pointer",
    // -moz-osx-font-smoothing: "grayscale",
    backfaceVisibility: "hidden",
    transform: "translateZ(0)",
    transition: "transform 0.25s ease-out",
    boxShadow: "2px 2px 4px #000000",
  },
  imgStyle: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "65%",
    borderRadius: "15%",
  },
  textStyle: {
    textDecoration: "underline",
  },
  buttonStyle: {
    boxShadow: "2px 2px 4px #000000",
  },
};

const TableRow = ({ employee }) => (
  <div style={style.TableContainer}>
    <h2 style={style.textStyle}>
      {employee.name.first} {employee.name.last}
    </h2>
    <p>
      <strong>
        Location: {employee.location.city}, {employee.location.state}
      </strong>
    </p>
    <img style={style.imgStyle} src={employee.picture.large} alt="" />
    <p>{employee.email}</p>
  </div>
);

export default TableRow;
