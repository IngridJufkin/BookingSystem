const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  serviceName: {
    type: String,
    minlength: 3,
    maxlength: 20,
    unique: true,
    required: [true, "Please Include service name"],
  },
});
module.exports = mongoose.model("serviceName", schema);
