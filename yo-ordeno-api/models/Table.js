const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TableSchema = new Schema(
  {
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true
    },
    number: {
      type: Number,
      required: true,
      unique: true
    },
    seatingCapacity: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Table", TableSchema);
