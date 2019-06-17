const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TableSchema = new Schema(
  {
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true
    },
    seatCapacity: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Table", TableSchema);
