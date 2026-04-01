const express = require("express")();
app.get("/", (req, res) =>
  res.send(`<h1>Hello World!</h1><a href="/hi">인사로 가기</a>`),
);
app.get("/hi", (req, res) => res.send("hihihihi"));
app.listen(3000, () => console.log(`Example app listening on port ${port}`));
