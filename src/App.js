// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StudentProfileInput from "./pages/StudentProfileInput";
import Home from "./pages/Home";
import TrackDetail from "./pages/TrackDetail";
import TrackResult from "./pages/TrackResult";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ 1. 앱 첫 시작 시 보여줄 페이지 */}
        <Route path="/" element={<StudentProfileInput />} />

        {/* ✅ 2. 트랙 추천 + 선택 */}
        <Route path="/home" element={<Home />} />

        {/* ✅ 3. 트랙 상세 과목 선택 */}
        <Route path="/track/:trackName" element={<TrackDetail />} />

        {/* ✅ 4. 이수 결과 화면 */}
        <Route path="/track/:trackName/result" element={<TrackResult />} />
      </Routes>
    </Router>
  );
}

export default App;
