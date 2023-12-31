const axios = require("axios");

const getExpensesQuery = async () => {
  try {
    const { data } = await axios.get(`${process.env.JSON_SERVER_URL}/expenses`);

    return data?.message, data;
  } catch (err) {
    throw err;
  }
};

const getExpensesDetailQuery = async (id) => {
    try {
const {data} = await axios.get(`${process.env.JSON_SERVER_URL}/expenses/${id}`);

return data?.message, data;
    } catch (err) {
throw err
    }
}

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
  getExpensesDetailQuery,
  createExpenseQuery
};