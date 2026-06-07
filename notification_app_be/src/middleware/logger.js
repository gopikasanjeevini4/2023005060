require("dotenv").config();
const axios = require("axios");


async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
      }
    );

    console.log("Log Created:", response.data);
  } catch (error) {
    console.error("Logging Error:", error.response?.data || error.message);
  }
}

module.exports = Log;