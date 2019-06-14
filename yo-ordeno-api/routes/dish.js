const express = require("express");
const router = express.Router();
const Dish = require("../models/Dish");
const authUtils = require("../helpers/auth");
const uploader = require("../helpers/multer");

router.get("/", (req, res, next) => {});

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
          message: "Platillo creado de manera exitosa"
        });
      })
      .catch(error => {
        error.action = `Error al crear un platillo para usuario con id ${_id}`;
        next(error);
      });
  }
);

module.exports = router;
