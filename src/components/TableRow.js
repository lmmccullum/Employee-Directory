import React from "react";

const style = {
  TableContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#c9800a",
    border: "2px solid gray",
    borderRadius: "10px",
    cursor: "pointer",
    backfaceVisibility: "hidden",
    transform: "translateZ(0)",
    transition: "transform 0.25s ease-out",
    boxShadow: "2px 2px 4px #c97c28",
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
    boxShadow: "2px 2px 4px #c97c28",
  },
};

const TableRow = ({ employee }) => (
  <tr>
    <td>
      {employee.name.first} {employee.name.last}
    </td>
    <td>
      {employee.location.city}, {employee.location.state}
    </td>
    <td>
    <img src={employee.picture.large} alt="" />
    </td>
    <td>{employee.email}</td>
  </tr>
);

export default TableRow;
