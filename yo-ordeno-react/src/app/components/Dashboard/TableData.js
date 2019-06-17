import React from "react";
import TableRow from "./TableRow";

const TableData = ({ tables }) => (
  <table className="uk-table">
    <caption>Mesas registradas</caption>
    <thead>
      <tr>
        <th># de Mesa</th>
        <th>Capacidad de personas</th>
        <th>Código QR</th>
      </tr>
    </thead>
    <tbody>
      {tables.map((table, index) => (
        <TableRow key={index} {...table} id={index} />
      ))}
    </tbody>
  </table>
);

export default TableData;
