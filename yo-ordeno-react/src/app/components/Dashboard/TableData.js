import React from "react";
import TableRow from "./TableRow";

const TableData = ({ tables, delTable }) => (
  <table className="uk-table uk-table-striped uk-table-middle uk-text-center">
    <caption>Mesas registradas</caption>
    <thead>
      <tr>
        <th className="uk-text-center"># de Mesa</th>
        <th className="uk-text-center">Capacidad de personas</th>
        <th className="uk-text-center">Código QR</th>
        <th className="uk-text-center">Eliminar</th>
      </tr>
    </thead>
    <tbody>
      {tables.map((table, index) => (
        <TableRow
          key={index}
          {...table}
          tableNumber={index}
          delTable={delTable}
        />
      ))}
    </tbody>
  </table>
);

export default TableData;
