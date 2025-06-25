// src/pages/TrackResult.jsx
import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "../App.css";

function TrackResult() {
  const { trackName } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const selected = state?.selectedCourses || [];

  const isPassed = selected.length >= 6;
  const percentage = Math.floor((selected.length / 6) * 100);

  return (
    <div className="App">
      <h2 style={{ textAlign: "left", marginBottom: "12px" }}>{trackName} 트랙 이수 결과</h2>

      <p style={{ fontWeight: "bold", marginBottom: "4px" }}>
        ✅ 이수한 과목 수: {selected.length}개
      </p>
      <p style={{ fontWeight: "bold", color: "#4285f4", marginTop: "2px" }}>
        🔒 이수율: {percentage}%
      </p>

      <h4 style={{ marginTop: "20px", marginBottom: "8px" }}>📘 이수한 과목 목록</h4>
      <ul>
        {selected.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>


      <button className="button" onClick={() => navigate("/")}>
        홈으로 돌아가기
      </button>
    </div>
  );
}

export default TrackResult;
