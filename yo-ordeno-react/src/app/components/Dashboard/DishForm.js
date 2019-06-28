import React from "react";
import FormInput from "../../common/FormInput";
import ImageUpload from "../../common/ImageUpload";
import defaultImage from "../../assets/defaultMeal.png";

const categories = [
  "Desayunos",
  "Entradas",
  "Sopas",
  "Ensaladas",
  "Bebidas",
  "Platillo principal"
];

const DishForm = ({ handleSubmit, handleChange, setImage, dish }) => {
  const { name, description, category, image, price, _id } = dish;

  return (
    <section
      className="uk-section uk-section-medium uk-width-expand"
      uk-height-viewport="offset-top: true; expand: true"
    >
      <div className="uk-container uk-container-small">
        {_id ? <h1>Editar Platillo</h1> : <h1>Nuevo Platillo</h1>}
        <ImageUpload
          image={image}
          defaultImage={defaultImage}
          setImage={setImage}
          classSize="imageProfile"
        />
        <form
          onSubmit={e => {
            handleSubmit(e, _id);
          }}
        >
          <fieldset className="uk-fieldset">
            <div className="uk-grid-small uk-child-width-expand" uk-grid="true">
              <div>
                {/* prettier-ignore */}
                <FormInput handleChange={handleChange} type="text" name="name" id="nameDish" placeholder={"Nombre del platillo"} value={name} label="Nombre del platillo" required={true}/>
              </div>
              <div>
                {/* prettier-ignore */}
                <FormInput handleChange={handleChange} type="number" name="price" id="priceDish" placeholder={"false"} value={price} label="Precio" step={"any"} min={0} required={true}/>
              </div>
              <div>
                <div className="uk-margin inp-div">
                  <select
                    onChange={handleChange}
                    className="uk-select"
                    name="category"
                    value={category ? category : "Escoge una categoría"}
                    required
                  >
                    <option disabled>Escoge una categoría</option>
                    {categories.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* prettier-ignore */}
            <FormInput handleChange={handleChange} type="text" name="description" id="descriptionDish" placeholder={"Descripción"} value={description} label="Descripción"/>

            <div className="uk-margin uk-flex uk-flex-center">
              <button className="uk-button uk-button-primary uk-width-1-2">
                {_id ? "Editar platillo" : "Dar de alta platillo"}
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default DishForm;
