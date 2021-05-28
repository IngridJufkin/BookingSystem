const db = require("../db");
const serviceName = db.ServiceName;

module.exports = async function (req, res) {
  try {
    let filter = {};
    filter = req.query;
    const allNames = await serviceName.find(filter);
    res.status(200).json({ allNames });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
