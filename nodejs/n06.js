const express = require("express");
const app = express();
const port = 3000;

const users = [
  { id: 1, name: "Hong", age: 22 },
  { id: 2, name: "Kim", age: 32 },
  { id: 3, name: "Lee", age: 28 },
];

app.get("/users/:id/:age/:name", (req, res) => {
  const { id, age, name } = req.params;
  console.log(id, age, name);
  //res.send(users);
});

app.get("/find/:id", (req, res) => {
  const { id, age, name } = req.params;
  const user = users.find((u) => u.id == id);
  console.log(users);
  //   res.json(user); // JS 형식 데이터
  res.send(`<h2>${JSON.stringify(user)}</h2>`); // JSON 문자 형식으로 전송
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
