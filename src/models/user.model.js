const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: [true, "Please Include your name"],
  },
  lastName: {
    type: String,
    required: [true, "Please Include your lastname"],
  },
  email: {
    type: String,
    required: [true, "Please Include your email"],
    lowercase: true,
    unique: true,
  },
  createdDate: { type: Date, default: Date.now },
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("user", schema);
