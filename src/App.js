import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TrackDetail from "./pages/TrackDetail";
import TrackResult from "./pages/TrackResult"; // ✅ 추가

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track/:trackName" element={<TrackDetail />} />
        <Route path="/track/:trackName/result" element={<TrackResult />} /> {/* ✅ 추가 */}
      </Routes>
    </Router>
  );
}

export default App;
