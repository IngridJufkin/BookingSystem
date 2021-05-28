const db = require("../db");
const ServiceOrder = db.ServiceOrder;

module.exports = async function (req, res) {
  try {
    const getOrdersByDate = await ServiceOrder.find({
      date: req.params.date,
      serviceName: req.params.serviceName,
      status: req.params.status,
    })
      .lean()
      .exec();

    res.status(200).json({ getOrdersByDate });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("error");
  }
};
