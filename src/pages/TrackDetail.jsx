import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "../App.css";

// 트랙별 과목 데이터 
const trackCourses = {
  "인공지능 시스템": [
    "K-MOOC: 모두를 위한 머신러닝", "K-MOOC: 생성형 인공지능 입문", "인공지능", "패턴인식",
    "Human-AI Interaction", "지능형 정보검색", "인공지능시스템", "지능형앱프로그래밍", "강화학습", "자연어처리",
    "고성능인공지능프로그래밍", "딥러닝"
  ],
  "메타버스 플랫폼": [
    "K-MOOC: 멀티미디어", "컴퓨터그래픽스", "디지털신호처리", "가상현실", "영상처리",
    "Human-AI Interaction", "웹기반시스템", "멀티코어프로그래밍", "컴퓨터비전", "메타버스시스템", "메타버스데이터처리", "블록체인"
  ],
  "클라우드 컴퓨팅": [
    "웹프로그래밍", "문제해결및실습:JAVA", "운영체제", "데이터베이스", "컴퓨터네트워크",
    "리눅스프로그래밍및실습", "웹기반시스템", "XML프로그래밍", "무선통신", "정보보호개론",
    "지능형네트워크프로그래밍", "AI네트워킹"
  ],
  "공간비주얼 SW": [
    "디지털이미지프로그래밍", "일반물리및시뮬레이션", "실시간컴퓨터그래픽스", "응용수치해석및시각화",
    "실세계모델링및렌더링", "컴퓨터애니메이션", "딥러닝개론", "가상현실", "컴퓨터비전및실습", "생성형AI", "디지털트윈", "증강현실"
  ],
  "인터랙티브 플랫폼": [
    "객체지향프로그래밍:C++", "객체지향프로그래밍:JAVA", "실시간컴퓨터그래픽스", "객체지향XR프로그래밍", "XR엔진개론",
    "웹기반프로그래밍", "딥러닝개론", "음성및오디오처리", "생성형AI", "UI/UX디자인개론", "메타버스시스템", "HCI"
  ],
  "지능형 에이전트": [
    "기계학습개론", "고급인공지능활용", "웹프로그래밍", "딥러닝실습", "딥러닝개론",
    "시계열분석", "패턴인식", "자연어처리", "강화학습", "인공지능문제해결및실습"
  ],
  "AI 콘텐츠": [
    "기계학습개론", "인공지능수학1", "인공지능수학2", "디지털신호처리", "딥러닝실습", "딥러닝개론",
    "영상처리", "컴퓨터그래픽스", "컴퓨터비전", "AR/VR/MR", "Human-AI Interaction"
  ],
  "데이터 인텔리전스": [
    "기계학습개론", "데이터분석개론", "딥러닝개론", "데이터베이스", "시계열분석",
    "딥러닝실습", "데이터시각화", "설명가능한인공지능", "대용량데이터처리", "데이터문제해결및실습"
  ]
};

function TrackDetail() {
  const { trackName } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const studentInfo = state?.studentInfo || {};

  const courses = trackCourses[trackName] || [];
  const [selected, setSelected] = useState([]);

  const toggleCourse = (course) => {
    setSelected((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course]
    );
  };

  const handleSubmit = () => {
    navigate(`/track/${trackName}/result`, {
      state: {
        selectedCourses: selected,
        studentInfo
      }
    });
  };

  return (
    <div className="App">
      <h2 style={{ textAlign: "left", marginBottom: "16px" }}>{trackName} 이수한 과목 선택</h2>

      {courses.map((course, i) => (
        <div className="card" key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <input
            type="checkbox"
            checked={selected.includes(course)}
            onChange={() => toggleCourse(course)}
          />
          <span>{course}</span>
        </div>
      ))}

      <p style={{ marginTop: "20px", fontWeight: "bold" }}>
        ✅ 선택한 과목 수: {selected.length}개
      </p>
      {selected.length >= 6 ? (
        <p style={{ color: "green" }}>🎉 트랙 인증 조건을 충족했습니다!</p>
      ) : (
        <p style={{ color: "#4285f4", fontWeight: "bold" }}>
          🔒 이수율: {Math.floor((selected.length / 6) * 100)}%
        </p>
      )}

      <button className="button" style={{ marginTop: "20px" }} onClick={handleSubmit}>
        과목 선택 완료
      </button>
    </div>
  );
}

export default TrackDetail;
