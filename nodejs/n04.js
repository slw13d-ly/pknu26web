const { createServer } = require("http");
const app = express();
const port = 4000;

const server = createServer((req, res) => {
  /* 서버사이드 랜더링 */
  res.end(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>하이퍼링크</title>
  </head>
  <body>
    <h1>하이퍼링크</h1>
    <hr />
    <a href="index.html">홈으로</a>
    <br />
    <br />
    <a href="https://naver.com">네이버</a>
    <br />
    <a href="https://daum.nat">다음</a>
  </body>
</html>
`);
});
server.listen(port, () => {
  console.log("서버가 동작하였습니다.");
});
