import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quote from "./pages/Home";         // 첫 페이지?
import QuotePage from "./pages/QuotePage"; // 두번쨰 페이지
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Quote />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
