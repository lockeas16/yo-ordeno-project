const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    name: {
      type: String,
      required: true,
      default: "Mi Restaurante"
    }
  },
  { timestamps: true }
);

RestaurantSchema.index({ location: "2dsphere" });
module.exports = mongoose.model("Restaurant", RestaurantSchema);
