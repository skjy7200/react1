import React, { useEffect, useState } from "react";
import "../App.css";

function QuotePage() {
  const [advice, setAdvice] = useState(null);

  const fallbackQuotes = [
    {
      message: "내일은 내일의 바람이 분다.",
      author: "이와타 사토루",
      authorProfile: "HAL 연구소 대표이사"
    },
    {
      message: "시련은 있어도 실패는 없다.",
      author: "정주영",
      authorProfile: "현대그룹 회장"
    }
  ];


  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://korean-advice-open-api.vercel.app/api/advice");
      const data = await response.json();
      setAdvice(data);
    } catch (error) {
      const randomFallback = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
      setAdvice(randomFallback);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="quote-box" style={{ marginTop: "50px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "8px", fontWeight: "600" }}>오늘의 명언</h2>
      <hr style={{ width: "120px", margin: "0 auto 20px", border: "1px solid #000" }} />
      <img
        src="/따음표.png"
        alt="quotation mark"
        style={{ width: "40px", height: "40px", marginBottom: "15px" }}
      />
      {advice ? (
        <>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "12px" }}>
            {advice.message}
          </p>
          <p style={{ fontSize: "0.9rem", color: "gray", marginBottom: "20px" }}>
            - {advice.author} ({advice.authorProfile})
          </p>
          <button
            onClick={fetchAdvice}
            style={{
              padding: "8px 16px",
              fontSize: "1rem",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: "#e0f0ff",
              border: "1px solid #b0d0f0"
            }}
          >
            다시 뽑기 🔄
          </button>
        </>
      ) : (
        <p>명언 로딩중...</p>
      )}
    </div>
  );
}

export default QuotePage;
