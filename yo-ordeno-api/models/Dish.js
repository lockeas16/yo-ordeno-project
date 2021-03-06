const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DishSchema = new Schema(
  {
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      enum: [
        "Desayunos",
        "Entradas",
        "Sopas",
        "Ensaladas",
        "Bebidas",
        "Platillo principal"
      ]
    },
    image: {
      type: String
    },
    available: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Dish", DishSchema);
