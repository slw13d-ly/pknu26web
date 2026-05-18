import { useState, useEffect } from "react";

function Ex10() {
  const [inData, setIndata] = useState("");
  const [arr, setArr] = useState([]);

  // 처음 화면이 열릴 때 localStorage에서 데이터 읽기
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      setArr(JSON.parse(savedTodos));
    }
  }, []);

  // arr 값이 바뀔 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.getItem("todos", JSON.stringify(arr));
  }, [arr]);

  const handleInput = (e) => setIndata(e.target.value);

  // 할 일 추가
  const handleAdd = () => {
    if (inData.trim() === "") {
      alert("내용을 입력하세요.");
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: inData,
      done: false,
    };

    setArr([...arr, newTodo]);
    setIndata("");
  };

  // 엔터로 입력
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  // 모두 삭제
  const handleDel = () => {
    setArr([]);
  };

  // 체크박스 완료 처리
  const handleToggle = (id) => {
    const newArr = arr.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
    setArr(newArr);
  };

  // 개별 삭제
  const handleRemove = (id) => {
    const newArr = arr.filter((todo) => todo.id !== id);
    setArr(newArr);
  };

  return (
    <div className="todo-wrap">
      <h1>10. TodoList 만들기</h1>

      <div className="input-box">
        <label htmlFor="inin">할 일 입력</label>
        <input
          type="text"
          id="inin"
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          value={inData}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={handleAdd}>추가</button>
        <button onClick={handleDel} disabled={arr.length <= 0}>
          모두 삭제
        </button>
      </div>

      <hr />

      <div className="todo-list">
        {arr.length === 0 ? (
          <p className="empty">등록된 할 일이 없습니다.</p>
        ) : (
          arr.map((todo, i) => {
            return (
              <div className="todo-item" key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleToggle(todo.id)}
                />

                <span className={todo.done ? "done" : ""}>
                  {i + 1}. {todo.text}
                </span>

                <button
                  className="delete-btn"
                  onClick={() => handleRemove(todo.id)}
                >
                  삭제
                </button>
              </div>
            );
          })
        )}
      </div>
      <pre>{`도전사항:
1. 엔터로 입력 가능 - 완료
2. CSS 꾸미기 - 완료
3. 체크박스로 완료는 줄긋기 - 완료
4. localStorage에 저장/읽기 기능을 넣어서 새로고침시에도 삭제되지 않게 하기 - 완료`}</pre>
    </div>
  );
}

export default Ex10;
