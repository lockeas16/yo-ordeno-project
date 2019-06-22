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
      <div className="uk-margin">
        <h2>o, ¿Ya tienes una orden?</h2>
        <p>
          Entra a consultar el estado de tu orden en la mesa{" "}
          {/* React step wizard puts a props attribute inside its own props */}
          <span
            className="uk-text-primary uk-text-large uk-link-text lobster-family"
            onClick={() => {
              const restaurant = props.props.match.params.restaurant;
              const table = props.props.match.params.id;
              props.props.history.push(`/kitchen/${restaurant}/table/${table}`);
            }}
          >
            aquí
          </span>
        </p>
      </div>
    </div>
  );
};

export default Step1;
