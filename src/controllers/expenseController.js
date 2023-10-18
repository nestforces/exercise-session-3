const { getExpensesService } = require("../services/expenseService");

const getExpensesController = async (req, res) => {
  try {
    const expenses = await getExpensesService();

    return res.status(200).json({
      message: "Get expenses success",
      data: expenses,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getExpensesController,
};
