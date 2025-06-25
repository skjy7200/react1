import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  const tracks = [
    "인공지능 시스템", "메타버스 플랫폼", "클라우드 컴퓨팅", "공간비주얼 SW",
    "인터렉티브 플랫폼", "지능형 에이전트", "AI 콘텐츠", "데이터 인텔리전스"
  ];

  const handleTrackClick = (track) => {
    navigate(`/track/${track}`);
  };

  return (
    <div className="App">
      {/* 인사 문구 */}
      <h2 style={{ textAlign: "left", marginBottom: "4px" }}>김강현님, 안녕하세요!</h2>
      <p style={{ textAlign: "left", marginBottom: "20px", color: "gray" }}>
        원하는 트랙을 선택하세요
      </p>

      {/* 트랙 선택 박스 */}
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
    </div>
  );
}

export default Home;
