import React from "react";
import blankProfile from "../../assets/default-profile-480x480.png";
import FormInput from "../../common/FormInput";

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
    <div className="uk-card">
      <div className="uk-card-media-top uk-text-center">
        <img
          className="uk-border-circle imageProfile"
          src={image || blankProfile}
          alt="profileImage"
        />
      </div>
      <div className="uk-card-body">
        <div className="uk-margin">
          <div uk-form-custom="true" className="uk-width-1-1">
            <input type="file" name="image" onChange={setImage} />
            <button
              className="uk-button uk-text-bold uk-width-1-2 uk-align-center"
              type="button"
              tabIndex="-1"
            >
              Subir foto
            </button>
          </div>
        </div>
      </div>
    </div>
    <form onSubmit={handleSubmit}>
      <fieldset className="uk-fieldset">
        {/* prettier-ignore */}
        <FormInput handleChange={handleChange} type="text" name="name" id="nameProfile" placeholder={false} value={name} label="Nombre(s)" required={true}/>
        {/* prettier-ignore */}
        <FormInput handleChange={handleChange} type="text" name="lastname" id="lastnameProfile" placeholder={false} value={lastname} label="Apellido paterno" required={true}/>
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
