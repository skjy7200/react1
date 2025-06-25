import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  // 검색 입력 상태
  const [searchQuery, setSearchQuery] = useState("");

  // 돋보기 버튼 클릭 시 검색 페이지로 이동
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate("/search");
    }
  };

  // 추천 강좌 더미 데이터
  const recommendedCourses = [
    { title: "컴퓨터구조", professor: "김동순", duration: "3h", rating: 4.9 },
    { title: "컴퓨터네트워크", professor: "김문석", duration: "3h", rating: 4.8 }
  ];

  return (
    <div className="App">
      {/* 인사 문구 */}
      <h2 style={{ textAlign: "left", marginBottom: "4px" }}>김강현님, 안녕하세요!</h2>
      <p style={{ textAlign: "left", marginBottom: "20px", color: "gray" }}>
        본인 강좌를 입력하세요
      </p>

      {/* 인기 과목 카드 */}
      <div className="card popular">
        <h3><span role="img" aria-label="heart">❤️</span> +100</h3>
        <p style={{ marginBottom: "12px" }}>인기 과목</p>
        <button className="button">강좌 입력</button>
      </div>

      {/* 검색창 + 돋보기 아이콘 버튼 */}
      <div className="search-wrapper">
        <input
          className="search-box"
          type="text"
          placeholder="강좌 탐색"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-icon-button" onClick={handleSearch}>
          🔍
        </button>
      </div>

      {/* 추천 강좌 섹션 */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>추천 강좌</h3>
        <span style={{ color: "#4285f4", cursor: "pointer" }}>See All</span>
      </div>

      <div className="recommended-courses">
        {recommendedCourses.map((course, index) => (
          <div className="course-card" key={index}>
            <h4>{course.title}</h4>
            <p>{course.professor}</p>
            <div className="course-meta">
              <span>⏱ {course.duration}</span>
              <span>⭐ {course.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
