const express = require("express");
const router = express.Router();
const Table = require("../models/Table");
const authUtils = require("../helpers/auth");

router.post("/", authUtils.verifyToken, (req, res, next) => {
  const { _id } = req.user;

  Table.create(req.body)
    .then(table => {
      return res.status(200).json({
        table,
        message: "Mesa creada de manera exitosa"
      });
    })
    .catch(error => {
      error.action = `Error al crear una mesa para usuario con id ${_id}`;
      next(error);
    });
});

router.get(":/id", (req, res, next) => {
  const { id } = req.params;
  Table.findById(id).then(table => {
    return res
      .status(200)
      .json({
        table,
        message: "Mesa encontrada"
      })
      .catch(error => {
        error.action = `Error al buscar mesa con id ${_id}`;
        next(error);
      });
  });
});

router.patch(":/id", authUtils.verifyToken, (req, res, next) => {
  const { id } = req.params;
  let updatedTable = {
    ...req.body
  };

  delete updatedTable._id;
  Table.findByIdAndUpdate(id, { ...updatedTable }, { new: true })
    .then(table => {
      return res.status(200).json({
        message: "Mesa actualizado de manera exitosa"
      });
    })
    .catch(error => {
      error.action = `Error al actualizar mesa para usuario con id ${id}`;
      next(error);
    });
});

router.delete("/:id", authUtils.verifyToken, (req, res, next) => {
  const { id } = req.params;

  Table.findByIdAndDelete(id)
    .then(() => {
      return res.status(200).json({
        message: "Mesa eliminada de manera exitosa"
      });
    })
    .catch(error => {
      error.action = `Error al eliminar una mesa con id ${id}`;
      next(error);
    });
});

module.exports = router;
