const Log = require("../../../logging_middleware/logger");

exports.getNotifications = async (req, res) => {
  await Log(
    "backend",
    "info",
    "controller",
    "Fetching notifications"
  );

  res.json([
    {
      id: 1,
      type: "Placement",
      message: "Microsoft Hiring"
    },
    {
      id: 2,
      type: "Event",
      message: "Tech Fest"
    }
  ]);
};