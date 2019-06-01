const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    confirmationCode: {
      type: String,
      unique: true
    },
    active: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      required: true,
      enum: ["OWNER", "DINER", "GUEST"],
      default: "OWNER"
    },
    image: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    lastname: {
      type: String
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
