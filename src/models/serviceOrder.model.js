const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  status: {
    type: Number,
    enum: [1, 0],
  },
  serviceName: { type: String },
  serviceTime: {
    type: String,
    enum: ["10:00", "11:00", "12:00", "14:00", "15:00"],
  },
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  userMobile: {
    type: String,
  },
  date: { type: Date, default: Date.now(), required: true },
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("serviceOrder", schema);
