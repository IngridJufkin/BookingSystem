const express = require("express");
const router = express.Router();

const {
  addServiceName,
  addServiceOrder,
  addUser,
  updateServiceOrder,
  getAllServiceNames,
  getAvailableServiceOrders,
} = require("./controllers");

router.post("/service", addServiceName);
router.post("/serviceOrder", addServiceOrder);
router.patch("/serviceOrder/:id", updateServiceOrder);
router.get("/serviceName", getAllServiceNames);
router.get(
  "/serviceOrder/:date/:serviceName/:status",
  getAvailableServiceOrders
);
router.post("/user", addUser);

module.exports = router;
