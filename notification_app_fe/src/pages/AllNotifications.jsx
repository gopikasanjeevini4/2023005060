function AllNotifications() {
  const notifications = [
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
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notification System</h1>

      {notifications.map((n) => (
        <div
          key={n.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px"
          }}
        >
          <h3>{n.type}</h3>
          <p>{n.message}</p>
        </div>
      ))}
    </div>
  );
}

export default AllNotifications;