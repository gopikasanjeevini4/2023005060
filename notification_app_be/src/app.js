const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Notification Backend Running"
  });
});

// Notifications Route
app.get("/notifications", (req, res) => {
  res.json([
    {
      id: 1,
      type: "Placement",
      message: "Microsoft Hiring"
    },
    {
      id: 2,
      type: "Result",
      message: "Semester Results Released"
    },
    {
      id: 3,
      type: "Event",
      message: "Tech Fest"
    }
  ]);
});

// Priority Notifications Route
app.get("/notifications/priority", (req, res) => {
  res.json([
    {
      id: 1,
      type: "Placement",
      message: "Microsoft Hiring",
      priority: 3
    },
    {
      id: 2,
      type: "Result",
      message: "Semester Results Released",
      priority: 2
    }
  ]);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});