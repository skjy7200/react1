//API 연결
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Quote() {
  const navigate = useNavigate();

  return (
    <div className="quote-box" style={{ textAlign: "center" }}>
      <button
        onClick={() => navigate("/quote")}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          borderRadius: "5px",
          backgroundColor: "#e0f0ff",
          border: "1px solid #b0d0f0",
          cursor: "pointer"
        }}
      >
        명언 뽑기
      </button>
    </div>
  );
}

export default Quote;
