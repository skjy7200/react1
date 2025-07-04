// TrackResult.jsx
import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "../App.css";
import { PieChart, Pie, Cell, Tooltip, Label } from "recharts";

const COLORS = ["#4285f4", "#eeeeee"];

function TrackResult() {
  const { trackName } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const selected = state?.selectedCourses || [];
  const studentInfo = state?.studentInfo || { credits: 0, semesters: 0, goal: "-" };

  const semesters = Number(studentInfo.semesters) || 0;
  const credits = Number(studentInfo.credits) || 0;
  const goal = studentInfo.goal || "-";

  const percentage = Math.min(Math.floor((selected.length / 6) * 100), 100);
  const remaining = 100 - percentage;

  const expectedCourses = semesters * 3;
  const totalExpected = selected.length + expectedCourses;

  let riskLabel = "안전";
  let riskColor = "blue";
  let icon = "\u{1F512}"; // 🔒

  if (totalExpected < 6) {
    riskLabel = "위험";
    riskColor = "red";
    icon = "\u{26A0}"; // ⚠️
  } else if (totalExpected < 8) {
    riskLabel = "주의";
    riskColor = "orange";
    icon = "\u{2757}"; // ❗
  }

  const pieData = [
    { name: "이수율", value: percentage },
    { name: "미이수", value: remaining }
  ];

  const remainingCourses = (state?.allCourses || []).filter(c => !selected.includes(c));

  // 인공지능시스템 트랙 과목 수강 가능성 분석용 리스트
  const sampleCourses = [
    { name: "인공지능", probability: 100 },
    { name: "패턴인식", probability: 100 },
    { name: "강화학습", probability: 65 },
    { name: "자연어처리", probability: 48 },
    { name: "딥러닝", probability: 100 },
    { name: "인공지능시스템", probability: 43 }
  ];

  return (
    <div className="App">
      <h2 style={{ textAlign: "left", marginBottom: "12px" }}>{trackName} 트랙 이수 결과</h2>

      <div style={{ textAlign: "left", marginBottom: "20px" }}>
        <p>📘 현재 학점: {credits}점</p>
        <p>📆 남은 학기: {semesters}학기</p>
        <p>🎯 희망 진로: {goal}</p>
      </div>

      <h4 style={{ textAlign: "left", marginBottom: "6px" }}>📊 이수율 분석</h4>
      <PieChart width={300} height={200}>
        <Pie
          data={pieData}
          cx={150}
          cy={90}
          innerRadius={40}
          outerRadius={70}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <p style={{ fontWeight: "bold", color: "#4285f4" }}>
        🔒 이수율: {percentage}%
      </p>

      <h4 style={{ marginTop: "20px", marginBottom: "8px" }}>📘 이수한 과목 목록</h4>
      <ul>
        {selected.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>

      <h4 style={{ marginTop: "24px", marginBottom: "8px" }}>📌 수강 가능성 평가</h4>
      <p>
        예상 추가 수강 가능 과목 수: {expectedCourses}개 / 총 이수 가능 예상: {totalExpected}개
      </p>
      <p style={{ color: "gray", fontSize: "0.9em" }}>
        ※ 평균적으로 한 학기에 3과목씩 수강 가능하다고 가정하며, 현재 학점과 남은 학기 수를 기반으로 계산됩니다.
      </p>
      <p style={{ color: riskColor, fontWeight: "bold" }}>
        {icon} 수강 가능성: {riskLabel}
      </p>

      <h4 style={{ marginTop: "24px", marginBottom: "8px" }}>📋 추천 과목별 수강 가능성</h4>
      <p style={{ fontSize: "0.9em", color: "gray" }}>
        ※ 아래 수치는 단순 예측치이며, 향후 AI 기반 수강 예측 API 연동 시 보다 정밀한 분석이 제공됩니다.
      </p>
      <ul>
        {sampleCourses.map((course, i) => {
          let color = "gray";
          let label = "";

          if (course.probability >= 80) {
            color = "green";
            label = "안전";
          } else if (course.probability >= 50) {
            color = "orange";
            label = "주의";
          } else {
            color = "red";
            label = "위험";
          }

          return (
            <li key={i} style={{ color }}>
              {course.name}: {course.probability}% ({label})
            </li>
          );
        })}
      </ul>

      <button className="button" onClick={() => navigate("/")}>홈으로 돌아가기</button>
    </div>
  );
}

export default TrackResult;