const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema(
  {
    table: {
      type: Schema.Types.ObjectId,
      ref: "Table"
    },
    dishes: [
      {
        dish: {
          type: Schema.Types.ObjectId,
          ref: "Dish",
          required: true
        },
        consumer: {
          type: String,
          required: true
        },
        notes: {
          type: String
        },
        status: {
          type: String,
          required: true,
          default: "Enviada",
          enum: ["Enviada", "Preparándose", "Lista", "Entregada", "Cancelada"]
        }
      }
    ]
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", OrderSchema);
