require("dotenv").config();
const Log = require("../../logging_middleware/logger");
const express = require("express");
const cors = require("cors");

const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  await Log(
    "backend",
    "info",
    "route",
    "Home route accessed"
  );

  res.json({
    message: "Notification Backend Running"
  });
});

app.use("/notifications", notificationRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});