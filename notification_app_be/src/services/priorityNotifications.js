const notifications = [
  { id: 1, type: "Placement", age: 1 },
  { id: 2, type: "Result", age: 2 },
  { id: 3, type: "Event", age: 3 }
];

const weights = {
  Placement: 3,
  Result: 2,
  Event: 1
};

const ranked = notifications.map(n => ({
  ...n,
  score: weights[n.type] * 1000 - n.age
}));

console.log(
  ranked.sort((a, b) => b.score - a.score)
);