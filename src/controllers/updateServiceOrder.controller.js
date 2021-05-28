const db = require("../db");
const ServiceOrder = db.ServiceOrder;

module.exports = async function (req, res) {
  try {
    await ServiceOrder.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    res.status(200).json({ message: "Successs!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
