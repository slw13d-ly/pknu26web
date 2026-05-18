import { useState } from "react";
import list from "./ex06_sample";

function Ex07() {
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleItem = (item) => {
    setCheckedItems((prev) => {
      const exists = prev.includes(item);
      return exists ? prev.filter((i) => i !== item) : [...prev, item];
    });
  };

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", fontFamily: "Arial" }}
    >
      <h1 style={{ color: "#333" }}>7. 체크박스</h1>
      <h2 style={{ color: "#666" }}>선택 항목: {checkedItems.length}개</h2>

      <div style={{ textAlign: "left", marginTop: "10px" }}>
        {list.map((v, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 12px",
              marginBottom: "8px",
              backgroundColor: "#f9f9f9",
              borderRadius: "6px",
              border: "1px solid #e0e0e0",
              transition: "background-color 0.2s",
            }}
          >
            <input
              type="checkbox"
              id={v}
              value={v}
              checked={checkedItems.includes(v)}
              onChange={() => toggleItem(v)}
              style={{
                marginRight: "12px",
                width: "18px",
                height: "18px",
                cursor: "pointer",
              }}
            />
            <label
              htmlFor={v}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              {v}
            </label>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: "20px", color: "#333" }}>
        선택 항목 목록: {JSON.stringify(checkedItems)}
      </h3>
    </div>
  );
}

export default Ex07;
