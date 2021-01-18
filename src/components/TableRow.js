import React from "react";

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
