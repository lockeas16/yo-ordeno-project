import React from "react";
import FormInput from "../../common/FormInput";

const Step1 = ({ handleChange, consumer, ...props }) => {
  return (
    <div>
      <h1>Bienvenido!!!</h1>
      <h2>¿A quién vamos a tener el placer de servirle?</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (consumer) props.nextStep();
        }}
      >
        <FormInput
          handleChange={handleChange}
          type="text"
          name="consumer"
          id="consumer"
          placeholder="Mi nombre es..."
          value={consumer}
          label="Nombre"
          classStyle="uk-text-large"
          required={true}
        />
        <p>
          <button className="uk-button uk-button-primary">Continuar</button>
        </p>
      </form>
    </div>
  );
};

export default Step1;
