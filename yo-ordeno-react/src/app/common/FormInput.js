import React from "react";

// prettier-ignore
const FormInput = ({ handleChange, name, id, type, placeholder, value, label, required, step, min, classStyle }) => (
  <div className="uk-margin inp-div">
    <input
      onChange={handleChange}
      className={`uk-width-1-1 inp-form ${classStyle}`}
      type={type}
      placeholder={placeholder === "false" ? undefined : placeholder}
      name={name}
      id={id}
      value={value}
      required={required}
      step={step ? step : "false"}
      min={min ? min : "false"}
    />
    <label className="inp-label" htmlFor={name}>
      {label}
    </label>
    <div className="underline" />
  </div>
);

export default FormInput;
