import React from "react";

const TableRow = ({ seatCapacity, id }) => (
  <tr>
    <td># {id}</td>
    <td>{seatCapacity}</td>
    <td>Codigo QR</td>
  </tr>
);

export default TableRow;
