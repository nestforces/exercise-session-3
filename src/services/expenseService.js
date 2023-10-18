const { getExpensesQuery, createExpenseQuery } = require("../queries/expenseQuery");

const getExpensesService = async () => {
  try {
    const expenses = await getExpensesQuery();

    return expenses;
  } catch (err) {
    throw err;
  }
};

const createExpenseService = async (name, nominal, category) => {
  try {
    const createExpense = await createExpenseQuery(name, nominal, category);
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getExpensesService,
  createExpenseService
};
