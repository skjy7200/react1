import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";
import { getBestMatchingTrack } from "../utils/similarity";

function Home() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const studentInfo = state?.studentInfo;

  const [recommendedTrack, setRecommendedTrack] = useState("");

  const tracks = [
    "인공지능 시스템", "메타버스 플랫폼", "클라우드 컴퓨팅", "공간비주얼 SW",
    "인터랙티브 플랫폼", "지능형 에이전트", "AI 콘텐츠", "데이터 인텔리전스"
  ];

  useEffect(() => {
    const fetchRecommendation = async () => {
      const track = await getBestMatchingTrack(studentInfo?.goal || "");
      setRecommendedTrack(track);
    };

    fetchRecommendation();
  }, [studentInfo?.goal]);

  const handleTrackClick = (track) => {
    navigate(`/track/${track}`, {
      state: { studentInfo }
    });
  };

  return (
    <div className="App">
      <h2 style={{ textAlign: "left", marginBottom: "4px" }}>김강현님, 안녕하세요!</h2>
      <p style={{ textAlign: "left", marginBottom: "20px", color: "gray" }}>
        원하는 트랙을 선택하세요
      </p>

      <div className="track-box">
        {tracks.map((track, index) => (
          <button
            key={index}
            className="track-button"
            onClick={() => handleTrackClick(track)}
          >
            {track}
          </button>
        ))}
      </div>

      {/* ✅ 추천 결과 출력: 없으면 '로딩 중...' */}
      <p style={{ color: "#ff7043", fontWeight: "bold", marginTop: "12px" }}>
        🔍 AI 추천 트랙: {recommendedTrack || "로딩 중..."}
      </p>
    </div>
  );
}

export default Home;
