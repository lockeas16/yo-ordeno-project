import React from "react";
import TableForm from "./TableForm";
import TableData from "./TableData";

const Tables = ({ user, tables, addTable, delTable }) => {
  return (
    <section
      className="uk-section uk-section-medium uk-width-expand"
      uk-height-viewport="offset-top: true; expand: true"
    >
      <div className="uk-container uk-container-small">
        <h2>Mesas</h2>
        <TableForm user={user} addTable={addTable} />
        <TableData user={user} tables={tables} delTable={delTable} />
      </div>
    </section>
  );
};

export default Tables;
