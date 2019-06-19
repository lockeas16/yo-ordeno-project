const express = require("express");
const router = express.Router();
const Dish = require("../models/Dish");
const authUtils = require("../helpers/auth");
const uploader = require("../helpers/multer");

router.post(
  "/",
  authUtils.verifyToken,
  uploader.single("image"),
  (req, res, next) => {
    const { _id } = req.user;
    // If a file is present
    let newDish = {
      ...req.body
    };

    if (req.file) {
      newDish.image = req.file.secure_url;
    }

    Dish.create(newDish)
      .then(dish => {
        return res.status(200).json({
          dish,
          message: "Platillo creado de manera exitosa"
        });
      })
      .catch(error => {
        error.action = `Error al crear un platillo para usuario con id ${_id}`;
        next(error);
      });
  }
);

router.get("/:restaurant", authUtils.verifyToken, (req, res, next) => {
  const { restaurant } = req.params;
  Dish.find({ restaurant })
    .then(dishes => {
      return res.status(200).json(dishes);
    })
    .catch(error => {
      error.action = `Error al listar los platillos`;
      next(error);
    });
});

router.patch(
  "/:id",
  authUtils.verifyToken,
  uploader.single("image"),
  (req, res, next) => {
    const { id } = req.params;

    let updatedDish = {
      ...req.body
    };

    delete updatedDish._id;

    if (req.file) {
      updatedDish.image = req.file.secure_url;
    }

    Dish.findByIdAndUpdate(id, { $set: { ...updatedDish } }, { new: true })
      .then(dish => {
        return res.status(200).json({
          dish,
          message: "Platillo actualizado de manera exitosa"
        });
      })
      .catch(error => {
        error.action = `Error al actualizar un platillo para usuario con id ${id}`;
        next(error);
      });
  }
);

router.delete("/:id", authUtils.verifyToken, (req, res, next) => {
  const { id } = req.params;

  Dish.findByIdAndDelete(id)
    .then(() => {
      return res.status(200).json({
        message: "Platillo eliminado de manera exitosa"
      });
    })
    .catch(error => {
      error.action = `Error al eliminar un platillo con id ${id}`;
      next(error);
    });
});

module.exports = router;
