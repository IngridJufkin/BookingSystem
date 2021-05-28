const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise;

module.exports = {
  ServiceName: require("./models/serviceName.model"),
  ServiceOrder: require("./models/serviceOrder.model"),
  User: require("./models/user.model"),
};
