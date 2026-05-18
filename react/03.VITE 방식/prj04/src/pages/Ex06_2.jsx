import { useState } from "react";
import list from "./ex06_sample";

function Ex06() {
  const [info, setInfo] = useState("원하는 도구를 고르세요.");
  const handleInfo = (e) => setInfo(e.target.value);

  const obj = {};
  list.forEach((v) => {
    obj[v] = v === info;
  });

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h1>6. 라디오 버튼</h1>
      <h2>{info}</h2>
      {list.map((v, i) => {
        return (
          <div key={i}>
            <input type="radio" name="one" value={v} onChange={handleInfo} />
            {v}
            <br />
          </div>
        );
      })}
      <h3>{JSON.stringify(obj)}</h3>
    </div>
  );
}

export default Ex06;
