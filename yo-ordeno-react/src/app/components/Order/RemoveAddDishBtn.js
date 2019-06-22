import React, { useState } from "react";
import FormInput from "../../common/FormInput";

// prettier-ignore
const RemoveAddDishBtn = ({dish, removeDishFromOrder, addDishToOrder, getQuantityOrdered}) => {
  const [notes, setNotes] = useState("");
  return (
    <React.Fragment>
      <div className="uk-flex uk-flex-center">
        <button
          href=""
          className="leftSkew outline btnOrder"
          onClick={e => {
            removeDishFromOrder(e, dish);
          }}
        >
          <span>-</span>
        </button>
        <span className="middleBtn">{getQuantityOrdered(dish._id)}</span>
        <button
          href=""
          className="rightSkew outline btnOrder"
          onClick={e => {
            addDishToOrder(e, dish, notes);
          }}
        >
          <span>+</span>
        </button>
      </div>
      <div>
        <FormInput
          handleChange={e => {
            setNotes(e.target.value)
          }}
          type="text"
          name="notes"
          value={notes}
          id="notesOrder"
          placeholder={
            "Instrucciones especiales (sin aderezo, sin cebolla, etc.)"
          }
          label="Notas"
        />
      </div>
    </React.Fragment>
  );
};

export default RemoveAddDishBtn;
