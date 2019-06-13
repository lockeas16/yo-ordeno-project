import React from "react";
import FormInput from "../../common/FormInput";

const DishForm = ({
  handleSubmit,
  handleChange,
  name,
  description,
  image,
  price
}) => (
  <section
    className="uk-section uk-section-medium uk-width-expand"
    uk-height-viewport="offset-top: true; expand: true"
  >
    <div className="uk-container uk-container-small">
      <h1>Nuevo Platillo</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="uk-fieldset">
          <div className="uk-grid-small uk-child-width-expand" uk-grid="true">
            <div>
              {/* prettier-ignore */}
              <FormInput handleChange={handleChange} type="text" name="name" id="nameDish" placeholder={"false"} value={name} label="Nombre del platillo" required={true}/>
            </div>
            <div>
              {/* prettier-ignore */}
              <FormInput handleChange={handleChange} type="number" name="price" id="priceDish" placeholder={"false"} value={price} label="Precio" step={"any"} required={true}/>
            </div>
          </div>
          
          {/* prettier-ignore */}
          <FormInput handleChange={handleChange} type="text" name="description" id="descriptionDish" placeholder={"false"} value={description} label="Descripcion"/>
          <div className="uk-margin uk-flex uk-flex-center">
            <button className="uk-button uk-button-primary uk-width-1-2">
              Dar de alta platillo
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  </section>
);

export default DishForm;
