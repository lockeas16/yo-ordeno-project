import React, { useState } from "react";
import { notification } from "../../utils/utils";
import FormInput from "../../common/FormInput";
import { newTable, editTable } from "../../services/tablesService";

const handleSubmit = (e, table, addTable) => {
  e.preventDefault();
  if (table.seatCapacity === "" || table.seatCapacity === 0)
    return notification("La cantidad de personas es inválida");
  table.id ? onEdit(table) : onCreate(table, addTable);
};

const onCreate = (table, addTable) => {
  newTable(table)
    .then(data => {
      addTable(data.table);
      notification(data.message, "success");
    })
    .catch(error => {
      console.log(error);
    });
};

const onEdit = table => {
  editTable(table, table._id)
    .then(data => {
      notification(data.message, "success");
    })
    .catch(error => {
      console.log(error);
    });
};

const TableForm = ({ user, addTable }) => {
  const [seatCapacity, setseatCapacity] = useState("");
  return (
    <form
      onSubmit={e => {
        let table = {
          seatCapacity,
          restaurant: user.restaurant
        };
        handleSubmit(e, table, addTable);
        setseatCapacity("");
      }}
    >
      <fieldset className="uk-fieldset">
        <div className="uk-grid-small uk-child-width-expand" uk-grid="true">
          <div>
            <FormInput
              handleChange={e => {
                setseatCapacity(e.target.value);
              }}
              type="number"
              name="seatCapacity"
              id="capacityTable"
              placeholder={"Cantidad de personas"}
              value={seatCapacity}
              label="Capacidad de la mesa"
              min={1}
              required={true}
            />
          </div>
          <div>
            <button className="uk-button uk-button-primary">
              Agregar mesa
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default TableForm;
