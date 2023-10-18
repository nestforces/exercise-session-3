const axios = require("axios");

const getExpensesQuery = async () => {
  try {
    const { data } = await axios.get(`${process.env.JSON_SERVER_URL}/expenses`);

    return data?.message;
  } catch (err) {
    throw err;
  }
};

const createExpenseQuery = async (name, nominal, category) => {
    try {
        await axios.post(`${process.env.JSON_SERVER_URL}/expenses`, {

            name,
            nominal,
            category,
            date: new Date()
        })
    } catch (err) {

    }
}

module.exports = {
  getExpensesQuery,
  createExpenseQuery
};