import React from "react";
import QRCodeComp from "./QRCode";
import { FaTrash } from "react-icons/fa";
import DeleteModal from "./DeleteModal";

const QRCodeTableURL = (_id, restaurant) => {
  return `${window.location.origin}/restaurant/${restaurant}/table/${_id}/`;
};

const TableRow = ({ seatCapacity, _id, tableNumber, delTable, user }) => (
  <tr>
    <td className="uk-width-small"># {tableNumber + 1}</td>
    <td className="uk-width-small">{seatCapacity}</td>
    <td>
      <QRCodeComp url={QRCodeTableURL(_id, user.restaurant)} />{" "}
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
