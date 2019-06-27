const express = require("express");
const router = express.Router();
const Table = require("../models/Table");
const Dish = require("../models/Dish");
const Order = require("../models/Order");
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
  Dish.find({ restaurant })
    .then(dishes => {
      return res.status(200).json(dishes);
    })
    .catch(error => {
      error.action = `Error al listar los platillos`;
      next(error);
    });
});

router.post("/:restaurant/order/", (req, res, next) => {
  const { restaurant } = req.params;

  Order.create(req.body)
    .then(order => {
      return res
        .status(200)
        .json({ message: "Orden enviada con éxito", order });
    })
    .catch(error => {
      error.action = `Error al enviar tu orden`;
      next(error);
    });
});

router.patch("/:restaurant/order/:order/dish/:dish", (req, res, next) => {
  const { restaurant, order, dish } = req.params;

  Order.findOneAndUpdate(
    { $and: [{ _id: order }, { "dishes._id": dish }] },
    { $set: { "dishes.$.status": "Entregado" } },
    { new: true }
  )
    .then(order => {
      return res.status(200).json({
        message: "Platillo cambio de estatus de manera exitosa",
        order
      });
    })
    .catch(error => {
      error.action = "Error al actualizar platillo de orden";
      next(error);
    });
});

// Example to update
// db.orders.findOneAndUpdate({"dishes._id":ObjectId('5d0e815ae8c3154a3d9ae58a')},{$set:{'dishes.$.status':"Entregado"}})

module.exports = router;
