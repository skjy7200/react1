import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TrackDetail from "./pages/TrackDetail";
import TrackResult from "./pages/TrackResult";
import StudentProfileInput from "./pages/StudentProfileInput";
import TrackAnalysisResult from "./pages/TrackAnalysisResult";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ 기존 페이지 라우팅 */}
        <Route path="/" element={<Home />} />
        <Route path="/track/:trackName" element={<TrackDetail />} />
        <Route path="/track/:trackName/result" element={<TrackResult />} />

        {/* ✅ 새로 추가된 페이지 라우팅 */}
        <Route path="/profile" element={<StudentProfileInput />} />
        <Route path="/result" element={<TrackAnalysisResult />} />
      </Routes>
    </Router>
  );
}

export default App;
