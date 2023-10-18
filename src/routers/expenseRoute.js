const express = require("express");
const router = express.Router();

const { getExpensesController } = require("../controllers/expenseController");

router.get("/", getExpensesController);

module.exports = router;
