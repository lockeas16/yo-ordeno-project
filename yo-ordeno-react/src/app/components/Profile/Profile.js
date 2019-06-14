import React from "react";
import defaultImage from "../../assets/default-profile-480x480.png";
import FormInput from "../../common/FormInput";
import ImageUpload from "../../common/ImageUpload";

const Profile = ({
  image,
  name,
  lastname,
  setImage,
  handleChange,
  handleSubmit
}) => (
  <div className="uk-container uk-width-1-3">
    <h2>Mis datos personales</h2>
    <ImageUpload
      image={image}
      defaultImage={defaultImage}
      setImage={setImage}
      classSize="imageProfile"
    />
    <form onSubmit={handleSubmit}>
      <fieldset className="uk-fieldset">
        {/* prettier-ignore */}
        <FormInput handleChange={handleChange} type="text" name="name" id="nameProfile" placeholder={"false"} value={name} label="Nombre(s)" required={true}/>
        {/* prettier-ignore */}
        <FormInput handleChange={handleChange} type="text" name="lastname" id="lastnameProfile" placeholder={"false"} value={lastname} label="Apellido paterno" required={true}/>
        <div className="uk-margin uk-flex uk-flex-center">
          <button className="uk-button uk-button-primary uk-width-1-2">
            Actualizar perfil
          </button>
        </div>
      </fieldset>
    </form>
  </div>
);

export default Profile;
