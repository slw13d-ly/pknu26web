const express = require("express");
const app = express(); // express 서버 기능사용

app.use(express.static(__dirname + "/prj06/dist")) // 경로설정
app.use(express.json()); // json 데이터 통신
app.use(express.urlencoded({ extended: false })); // url 인코딩 데이터 통신

app.post("/data", (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)
    res.send(`받았습니다.${username}님!!`)
})

app.listen(3000, () => {
    console.log("server start on http://localhost:3000");
})