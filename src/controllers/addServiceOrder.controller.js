const db = require("./../db");
const ServiceOrder = db.ServiceOrder;

module.exports = async function (req, res) {
  try {
    await ServiceOrder.create(req.body);
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
