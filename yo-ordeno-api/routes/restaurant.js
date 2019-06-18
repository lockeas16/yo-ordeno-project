const express = require("express");
const router = express.Router();
const Table = require("../models/Table");
const Dish = require("../models/Dish");
const authUtils = require("../helpers/auth");

router.get("/:restaurant/tables", authUtils.verifyToken, (req, res, next) => {
  const { restaurant } = req.params;

  Table.find({ restaurant })
    .then(tables => {
      return res.status(200).json(tables);
    })
    .catch(error => {
      error.action = `Error al listar las mesas`;
      next(error);
    });
});

router.get("/:restaurant/table/:id", (req, res, next) => {
  const { restaurant, id } = req.params;

  Table.findById(id)
    .then(table => {
      if (table.restaurant.toString() === restaurant)
        return res.status(200).json(table);
      else {
        error = {
          message: `La mesa no pertenece al restaurante`,
          action: `Error en relación de mesa con restaurante`
        };
        next(error);
      }
    })
    .catch(error => {
      error.action = `La mesa o el restaurante no existen`;
      next(error);
    });
});

router.get("/:restaurant/dishes/", (req, res, next) => {
  const { restaurant } = req.params;
  console.log(restaurant);
  Dish.find({ restaurant })
    .then(dishes => {
      return res.status(200).json(dishes);
    })
    .catch(error => {
      error.action = `Error al listar los platillos`;
      next(error);
    });
});

module.exports = router;
