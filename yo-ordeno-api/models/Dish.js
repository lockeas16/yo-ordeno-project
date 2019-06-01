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
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      enum: [
        "Appetizers",
        "Salads",
        "Beverage",
        "Breakfast",
        "Meal",
        "Desserts"
      ]
    },
    available: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Dish", DishSchema);
