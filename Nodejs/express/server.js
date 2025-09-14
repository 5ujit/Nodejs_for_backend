// index.js
const express = require("express");
const app = express();
app.use(express.json());

let users = [{ id: 1, name: "Sujit" }];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});

app.post("/home", (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});


app.post("/home", (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
