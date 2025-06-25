// src/pages/QuotePage.jsx
import React from "react";
import "../App.css";

function QuotePage() {
  const courses = [
    { title: "컴퓨터구조", year: 2, people: 99, prof: "김동순", rating: 4.9 },
    { title: "컴퓨터네트워크", year: 3, people: 75, prof: "양효식", rating: 4.8 },
    { title: "기초코딩", year: 1, people: 60, prof: "홍길동", rating: 4.7 }
  ];

  return (
    <div className="App">
      <h2>실시간 인기 강좌</h2>
      {courses.map((c, i) => (
        <div className="card" key={i}>
          <p>❤️ {c.title} ({c.year}학년 / 👥 {c.people})</p>
          <p>👨‍🏫 {c.prof} | ⭐ {c.rating}</p>
        </div>
      ))}
      <button className="button">추천 과목 등록</button>
    </div>
  );
}

export default QuotePage;
