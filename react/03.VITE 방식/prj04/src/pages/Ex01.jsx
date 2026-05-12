function Ex01() {
  // LocalStorage CRUD

  /* Create */
  const data = [
    { id: 1, name: "홍길동", comment: "아버지를 부르지 못하고" },
    { id: 2, name: "임꺽정", comment: "하늘을 향해 웃으며" },
    { id: 3, name: "장길산", comment: "바람처럼 사라져 버리고" },
    { id: 4, name: "김삿갓", comment: "시 한 수 던져두고" },
    { id: 5, name: "전우치", comment: "술잔을 기울이며 떠난다" },
  ];
  const jdata = JSON.stringify(data);
  localStorage.setItem("test1", jdata);

  /* Read */
  const readData = localStorage.getItem("test1");
  const odata = JSON.parse(readData);

  /* Delete */
  // localStorage.removeItem("test1");

  /* Clear */
  // localStorage.clear()

  return (
    <>
      <h1>Ex01. LocalStorage 연습</h1>
      <h2>데이터 쓰고 / 읽어오기</h2>
      <h2>{odata.id}</h2>
    </>
  );
}

export default Ex01;
