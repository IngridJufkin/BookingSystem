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

router.get("/serviceName", getAllServiceNames);
router.get(
  "/serviceOrder/:date/:serviceName/:status",
  getAvailableServiceOrders
);

router.post("/service", addServiceName);
router.post("/serviceOrder", addServiceOrder);
router.post("/user", addUser);

router.patch("/serviceOrder/:id", updateServiceOrder);

module.exports = router;
