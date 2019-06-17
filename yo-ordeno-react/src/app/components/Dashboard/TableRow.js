import React from "react";
import QRCodeModal from "./QRCodeModal";

const QRCodeTableURL = _id => {
  return `${window.location.origin}/order/${_id}/`;
};

const TableRow = ({ seatCapacity, _id, tableNumber }) => (
  <tr>
    <td># {tableNumber}</td>
    <td>{seatCapacity}</td>
    <td>
      <QRCodeModal url={QRCodeTableURL(_id)} />{" "}
    </td>
  </tr>
);

export default TableRow;
