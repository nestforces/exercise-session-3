const { getExpensesQuery, getExpensesDetailQuery, createExpenseQuery } = require("../queries/expenseQuery");

const getExpensesService = async () => {
  try {
    const expenses = await getExpensesQuery();

    return expenses;
  } catch (err) {
    throw err;
  }
};

const getExpensesDetailService = async (id) => {
  try {
    const expenses = await getExpensesDetailQuery(id);

    return expenses;
  } catch (err) {
    throw err;
  }
}


const createExpenseService = async (name, nominal, category) => {
  try {
    const createExpense = await createExpenseQuery(name, nominal, category);
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getExpensesService,
  getExpensesDetailService,
  createExpenseService
};
