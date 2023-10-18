const { getExpensesQuery } = require("../queries/expenseQuery");

const getExpensesService = async () => {
  try {
    const expenses = await getExpensesQuery();

    return expenses;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getExpensesService,
};
