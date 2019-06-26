import React from "react";

const ImageUpload = ({ image, defaultImage, setImage, classSize }) => {
  // console.log("imagen URL", image);
  return (
    <div className="uk-card">
      <div className="uk-card-media-top uk-text-center">
        <img
          className={`uk-border-circle ${classSize}`}
          src={image || defaultImage}
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
              Subir imagen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
