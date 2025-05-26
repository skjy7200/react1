// 1페이지 화면 구성
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">오늘의 명언</h1>

      <div className="quote-box">
        <button className="button" onClick={() => navigate("/quote")}>
          오늘의 명언 뽑기
        </button>
      </div>
    </div>
  );
}

export default Home;
