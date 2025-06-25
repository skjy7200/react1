import React from "react";
import "../App.css";

function TrackAnalysisResult({ trackName, selectedCourses, studentInfo }) {
  const required = 6;
  const completed = selectedCourses.length;
  const remaining = Math.max(required - completed, 0);

  // 간단한 AI-like 추천 메시지 생성
  const recommendMessage = () => {
    if (completed >= 6) {
      return `🎉 ${trackName} 트랙 인증 조건을 충족했습니다!`
    } else if (studentInfo.remainingSemesters <= 2 && remaining > 2) {
      return `⚠️ 졸업까지 시간이 부족하므로 ${trackName} 트랙 이수가 어려울 수 있습니다.`;
    } else if (studentInfo.interest && trackName.includes(studentInfo.interest)) {
      return `💡 관심 분야인 ${studentInfo.interest}에 적합한 트랙입니다. 지금부터 계획적으로 이수해보세요!`;
    } else {
      return `${trackName} 트랙 이수까지 ${remaining}과목이 남았습니다. 학점과 학기를 고려하여 수강계획을 세워보세요.`;
    }
  };

  return (
    <div className="App">
      <h2 style={{ textAlign: "left" }}>{trackName} 트랙 분석 결과</h2>
      <p>✅ 선택한 과목 수: {completed}개</p>
      <p>📘 남은 과목 수: {remaining}개</p>
      <p>📚 현재 학점: {studentInfo.gpa}점</p>
      <p>📆 남은 학기: {studentInfo.remainingSemesters}학기</p>
      <p>🚀 희망 진로: {studentInfo.interest}</p>
      <hr />
      <p style={{ fontWeight: "bold", fontSize: "1.1rem", color: completed >= 6 ? "green" : "#555" }}>
        {recommendMessage()}
      </p>
    </div>
  );
}

export default TrackAnalysisResult;
