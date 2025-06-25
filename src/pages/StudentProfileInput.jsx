// StudentProfileInput.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentProfileInput() {
  const [credits, setCredits] = useState(0);
  const [semesters, setSemesters] = useState(0);
  const [goal, setGoal] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/track/analysis", {
      state: {
        credits: Number(credits),
        semesters: Number(semesters),
        goal
      }
    });
  };

  return (
    <div className="App">
      <h2>학생 정보 입력</h2>
      <div className="card">
        <label>📘 현재까지 이수 학점:
          <input
            type="number"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
            placeholder="예: 90"
          />
        </label>
      </div>

      <div className="card">
        <label>⏳ 남은 학기 수:
          <input
            type="number"
            value={semesters}
            onChange={(e) => setSemesters(e.target.value)}
            placeholder="예: 2"
          />
        </label>
      </div>

      <div className="card">
        <label>🎯 희망 진로 분야:
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="예: AI 개발자"
          />
        </label>
      </div>

      <button className="button" onClick={handleSubmit}>이수 분석 시작</button>
    </div>
  );
}

export default StudentProfileInput;
