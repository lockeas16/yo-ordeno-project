const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const authUtils = require("../helpers/auth");
const uploader = require("../helpers/multer");
const crypto = require("crypto");
const mailer = require("../helpers/mailer");

// React pone una variable de entorno para saber el entorno y en base al entorno hacer peticiones al back
const isProduction = process.env.NODE_ENV === "production";
const base_url = isProduction ? "url_de_heroku" : "http://localhost:3000/api";

router.post("/signup", (req, res, next) => {
  // generamos hash para password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);
  // we generate token for verification
  const randomToken = crypto.randomBytes(25).toString("hex");
  const newUser = {
    ...req.body,
    confirmationCode: randomToken,
    password: hashedPassword
  };

  User.create(newUser)
    .then(user => {
      let options = {
        email: newUser.email,
        subject: "Yo Ordeno - Verificación de correo",
        user: newUser.username,
        confirmationUrl: `${base_url}/auth/confirm/${randomToken}`
      };
      options.filename = "confirmation";

      mailer
        .send(options)
        .then(info => {
          console.log("Mail succesfully sended", info);
          return res.status(200).json({
            message:
              "Proceso de registro completo, espera el correo de confirmación"
          });
        })
        .catch(error => {
          error.action = `Error al crear el codigo de confirmacion para el usuario ${
            newUser.email
          }`;
          next(error);
        });
    })
    .catch(error => {
      error.action = `Error al crear el usuario ${newUser.username}`;
      next(error);
    });
});

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ $and: [{ active: true }, { username }] })
    .then(user => {
      if (!user)
        return res.status(404).json({
          error: {},
          message: "Nombre de usuario no encontrado o sin confirmar"
        });
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid)
        return res
          .status(401)
          .json({ error: {}, message: "Password inválido" });
      // generacion de token
      jwt.sign(
        { id: user._id },
        process.env.SECRET,
        { expiresIn: process.env.TOKENLIFETIME },
        (error, token) => {
          if (error)
            return res
              .status(500)
              .json({ error, message: "Error en la creación del token" });
          user = authUtils.cleanUser(user._doc);
          res.status(200).json({ user, token });
        }
      );
    })
    .catch(error => {
      error.action = "Error durante el proceso de login";
      next(error);
    });
});

router.post(
  "/upload",
  authUtils.verifyToken,
  uploader.single("image"),
  (req, res, next) => {
    const image = req.file.secure_url;
    const { _id } = req.user;
    User.findByIdAndUpdate(_id, { $set: { image } }, { new: true })
      .then(user => {
        user = authUtils.cleanUser(user._doc);
        res.status(200).json({ user });
      })
      .catch(error => {
        error.action = "Error al subir una imagen";
        next(error);
      });
  }
);

router.post(
  "/edit",
  authUtils.verifyToken,
  uploader.single("image"),
  (req, res, next) => {
    // If a file is present
    let user = {
      ...req.body
    };

    if (req.file) {
      user.image = req.file.secure_url;
    }

    const { _id } = req.user;
    User.findByIdAndUpdate({ _id }, { $set: { ...user } }, { new: true })
      .then(user => {
        user = authUtils.cleanUser(user._doc);
        res.status(200).json({ user });
      })
      .catch(error => {
        error.action = "Error al editar un usuario";
        next(error);
      });
  }
);

router.get("/loggedin", authUtils.verifyToken, (req, res) => {
  res.status(200).json({ message: "User login still valid" });
});

router.get("/confirm/:code", (req, res) => {
  let { code } = req.params;
  User.findOne({ confirmationCode: code })
    .then(user => {
      let { _id } = user;
      User.findByIdAndUpdate(_id, { $set: { active: true } }).then(user => {
        // generacion de token
        jwt.sign(
          { id: user._id },
          process.env.SECRET,
          // valor en segundos
          { expiresIn: process.env.TOKENLIFETIME },
          (error, token) => {
            if (error)
              return res
                .status(500)
                .json({ error, message: "Error en la creación del token" });
            user = authUtils.cleanUser(user._doc);
            res.status(200).json({ user, token });
          }
        );
      });
    })
    .catch(error => {
      error.action = `Error en la creación del token ${code} para confirmación de usuario`;
      next(error);
    });
});

module.exports = router;
