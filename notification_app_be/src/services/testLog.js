require("dotenv").config();

console.log(process.env.ACCESS_TOKEN);

const Log = require("../middleware/logger");

Log(
  "backend",
  "info",
  "service",
  "Backend started successfully"
);