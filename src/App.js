import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quote from "./pages/Home";         // 홈
import QuotePage from "./pages/QuotePage"; // 인기 강좌 페이지
import SearchResultPage from "./pages/SearchResultPage"; // 검색 페이지
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Quote />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/search" element={<SearchResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
