const db = require("../db");
const ServiceName = db.ServiceName;

module.exports = async function (req, res) {
  try {
    await ServiceName.create(req.body);
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
