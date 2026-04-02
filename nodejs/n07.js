const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const _path = path.join(__dirname, "dist");

/* 정적 서비스로 index.html 파일 서빙 */
app.use(express.static(_path));
/* JSON 해석기 */
app.use(express.json());
/* POST 방식을 위한 해석 */
app.use(express.urlencoded({ extended: true }));

let num = 0;

app.post("/data", (req, res) => {
  const { name, age } = req.body;
  const newUser = {
    id: num++,
    name,
    age,
  };
  console.log(newUser);
  res.json(newUser);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
