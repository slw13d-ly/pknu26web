import { useState } from "react";

function Ex01() {
  // 화면에 보여줄 데이터 상태
  const [list, setList] = useState([]);

  // LocalStorage에 저장할 기본 데이터
  const data = [
    { id: 1, name: "홍길동", comment: "아버지를 아버지라 부르지 못하고" },
    { id: 2, name: "성춘향", comment: "그네를 타며 봄날을 즐기고" },
    { id: 3, name: "이몽룡", comment: "과거에 급제하여 돌아오고" },
    { id: 4, name: "심청이", comment: "아버지를 위해 인당수에 몸을 던지고" },
    { id: 5, name: "흥부", comment: "제비 다리를 고쳐 복을 받고" },
  ];
  // 로드 버튼 클릭시 실행
  const handleLoad = () => {
    // localStorage에 데이터 저장
    const jdata = JSON.stringify(data);
    localStorage.setItem("test1", jdata);

    // localStorage에서 데이터 읽기
    const readData = localStorage.getItem("test1");
    // 문자열 데이터를 다시 배열로 반환
    const odata = JSON.parse(readData);
    // 화면에 출력할 데이터 상태 변경
    setList(odata);
  };

  // 클리어 버튼 클릭시 실행
  const handleClear = () => {
    // localStorage에서 test1 삭제
    localStorage.removeItem("test1");
    // 화면에 보이는 데이터도 비우기
    setList([]);
  };

  /* Clear */
  // localStorage.clear()

  return (
    <>
      <h1>Ex01. LocalStorage 연습</h1>
      <h2>데이터 쓰고 / 읽어오기</h2>

      <button onClick={handleLoad}>로드</button>
      <button onClick={handleClear}>클리어</button>

      {list.map((item) => (
        <div key={item.id}>
          <h2>id: {item.id}</h2>
          <h2>name: {item.name}</h2>
          <h2>comment: {item.comment}</h2>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Ex01;
