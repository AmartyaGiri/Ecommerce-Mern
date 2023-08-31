const express = require("express");
const { checkout, getKey } = require("../controllers/paymentController.js");

const { isAuthenticated} = require("../middleware/auth");

const paymentRouter = express.Router();

paymentRouter.route("/checkout").post(isAuthenticated, checkout);
paymentRouter.route("/getKey").get(getKey);

module.exports = paymentRouter;