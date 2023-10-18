const axios = require("axios");

const getExpensesQuery = async () => {
  try {
    const { data } = await axios.get(`${process.env.JSON_SERVER_URL}/expenses`);

    return data?.message;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getExpensesQuery,
};