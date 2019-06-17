import React from "react";
import TableForm from "./TableForm";
import TableData from "./TableData";

const Tables = ({ user, tables, addTable }) => {
  return (
    <section
      className="uk-section uk-section-medium uk-width-expand"
      uk-height-viewport="offset-top: true; expand: true"
    >
      <div className="uk-container uk-container-expand">
        <h2>Mesas</h2>
        <TableForm user={user} addTable={addTable} />
        <TableData tables={tables} />
      </div>
    </section>
  );
};

export default Tables;
