import React, { useEffect, useState } from "react";
import "../App.css";

function QuotePage() {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
      const data = await response.json();
      setQuote(data.slip.advice);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote-box">
      <p>{quote}</p>
    </div>
  );
}

export default QuotePage;
