import React from "react";
import "../App.css";

// 더미 데이터
function SearchResultPage() {
  const results = [
    { title: "컴퓨터구조", year: 2, people: 99, prof: "김동순", rating: 4.9, time: "3h" },
    { title: "컴퓨터네트워크", year: 3, people: 75, prof: "양효식", rating: 4.8, time: "1h 30m" },
    { title: "기초코딩", year: 1, people: 60, prof: "홍길동", rating: 4.7, time: "1h 30m" }
  ];

  return (
    <div className="App">
      <h2 style={{ textAlign: "left", marginBottom: "16px" }}>검색 결과</h2>
      {results.map((c, i) => (
        <div className="card" key={i} style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <img src="/pc1.png" alt="course" style={{ width: "60px", height: "60px" }} />
          <div style={{ flexGrow: 1 }}>
            <h4 style={{ margin: 0 }}>{c.title}</h4>
            <p style={{ margin: "4px 0", color: "#555" }}>{c.year}학년 / 👥 {c.people}</p>
            <p style={{ margin: "4px 0", color: "#888" }}>⭐ {c.rating} ・ {c.time}</p>
            <p style={{ margin: "4px 0", color: "#444" }}>{c.prof}</p>
          </div>
          <span style={{ fontSize: "1.4rem", color: "red" }}>❤️</span>
        </div>
      ))}
    </div>
  );
}

export default SearchResultPage;