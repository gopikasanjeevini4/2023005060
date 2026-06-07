exports.getNotifications = (req, res) => {
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