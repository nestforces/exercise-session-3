const { getExpensesService, createExpenseService } = require("../services/expenseService");

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

const createExpenseController = async (req, res) => {
    try {
        const { name, nominal, category} = req.body;

        const createExpense = await createExpenseService(name, nominal, category);

        return res.status(200).json({
            message: "Post expenses success",
            data: createExpense,
          });
        } catch (err) {
          return res.status(500).json({
            message: err.message,
          });
        }
    }


module.exports = {
  getExpensesController,
  createExpenseController
};
