require("dotenv").config();

const express = require("express");
const cors = require("cors");

const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend Running" });
});

app.use("/notifications", notificationRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});