const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const hbs = require("hbs");
const fs = require("fs");

const auth = {
  auth: {
    api_key: process.env.MAILGUNAPIKEY,
    domain: process.env.MAILGUNDOMAIN
  }
};

var nodemailerMailgun = nodemailer.createTransport(mg(auth));

// filename sera la vista a compilar por handle bars
// options sera un objeto que recibira para que sean interpretados
// al compilar el archivo con handle bars
const generateHTML = (filename, options) => {
  const html = hbs.compile(
    fs.readFileSync((__dirname, `./views/mail/${filename}.hbs`), "utf-8")
  );
  // al compilado de handlebars, le mandamos un objeto que
  // sera interpretado y sustituyendo atributos
  return html(options);
};

exports.send = options => {
  const html = generateHTML(options.filename, options);
  const mailOptions = {
    from: "yo-ordeno@yoordeno.mailgun.org",
    to: options.email,
    subject: options.subject,
    confirmationUrl: options.confirmationUrl,
    html
  };
  return nodemailerMailgun.sendMail(mailOptions);
};
