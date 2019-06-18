const express = require("express");
const router = express.Router();
const Table = require("../models/Table");
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

module.exports = router;
