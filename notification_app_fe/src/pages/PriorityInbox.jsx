function PriorityInbox() {
  const notifications = [
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
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Priority Inbox</h1>

      {notifications.map((n) => (
        <div
          key={n.id}
          style={{
            border: "1px solid black",
            marginBottom: "10px",
            padding: "10px"
          }}
        >
          <h3>{n.type}</h3>
          <p>{n.message}</p>
          <strong>Priority: {n.priority}</strong>
        </div>
      ))}
    </div>
  );
}

export default PriorityInbox;