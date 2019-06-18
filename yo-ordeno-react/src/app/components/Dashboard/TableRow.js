import React from "react";
import QRCodeModal from "./QRCodeModal";
import { FaTrash } from "react-icons/fa";
import DeleteModal from "./DeleteModal";

const QRCodeTableURL = _id => {
  return `${window.location.origin}/table/${_id}/`;
};

const TableRow = ({ seatCapacity, _id, tableNumber, delTable }) => (
  <tr>
    <td className="uk-width-small"># {tableNumber + 1}</td>
    <td className="uk-width-small">{seatCapacity}</td>
    <td>
      <QRCodeModal url={QRCodeTableURL(_id)} />{" "}
    </td>
    <td className="uk-table-shrink">
      <div
        className="hoverTrash"
        uk-toggle={`target: #delete-table-${tableNumber}`}
      >
        <FaTrash />
      </div>
      <DeleteModal
        handleDelete={delTable}
        _id={_id}
        idNode={tableNumber}
        legend={"¿Seguro de que quieres eliminar esta mesa?"}
        name="table"
      />
    </td>
  </tr>
);

export default TableRow;
