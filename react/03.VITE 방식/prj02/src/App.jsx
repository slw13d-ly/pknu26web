import { useState } from "react";

import "./App.css";

const lessons = [
  { id: 1, title: "Component", desc: "UI를 작은 함수 단위로 나눕니다." },
  { id: 2, title: "Props", desc: "부모가 자식에게 데이터를 전달합니다." },
  { id: 3, title: "Children", desc: "태그 사이의 내용 컴포넌트에 전달합니다." },
];

// 왜 소문자야...? 왜 4개가 가능해..?
function Card(title, desc, children) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{desc}</p>
      <small>{children}</small>
    </article>
  );
}

function App() {
  return (
    <main className="page">
      <h1>컴포넌트와 Props</h1>
      <div className="box">
        {/* 매개변수의 값을 뭐..? */}
        {
          <Card title={lessons[0].title} desc={lessons[0].desc}>
            실습{lessons[0].id}
          </Card>
          // 태그와 태그 사이는 Children..?
        }
        {
          <Card title={lessons[1].title} desc={lessons[1].desc}>
            실습{lessons[1].id}
          </Card>
        }
        {
          <Card title={lessons[2].title} desc={lessons[2].desc}>
            실습{lessons[2].id}
          </Card>
        }
        {<Card />}
        {<Card />}
      </div>
      {/* page 안에 box 있고 box 안에 card 잇서요 */}
    </main>
  );
}

export default App;
