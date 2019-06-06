import React from "react";

// prettier-ignore
const FormInput = ({ handleChange, name, id, type, placeholder, value, label, required }) => (
  <div className="uk-margin inp-div">
    <input
      onChange={handleChange}
      className="uk-width-1-1 inp-form"
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      required={required}
    />
    <label className="inp-label" htmlFor={name}>
      {label}
    </label>
    <div className="underline" />
  </div>
);

export default FormInput;
