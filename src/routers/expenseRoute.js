const express = require("express");
const router = express.Router();

const { getExpensesController, createExpenseController, getExpensesDetailController } = require("../controllers/expenseController");

router.get("/", getExpensesController);
router.get("/:id", getExpensesDetailController);
// router.post("/", (req, res) => {
//     const { name, nominal, category, date} = req.query;
//     res.send(` name: ${name}, nominal: ${nominal}, category: ${category}, date: ${date}`)
// })
router.post('/', createExpenseController);

module.exports = router;
