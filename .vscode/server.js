const express = require('express');
const cors = require('cors');

// 유사도 계산 로직을 가져옵니다.
const { getBestMatchingTrack } = require('./src/utils/similarity');

const app = express();

// CORS 허용
app.use(cors());
// JSON 요청 바디 파싱
app.use(express.json());

// 추천 트랙 API
app.post('/api/recommend', (req, res) => {
  const { goal } = req.body;

  if (!goal) {
    return res.status(400).json({ error: 'Goal is required' });
  }

  const track = getBestMatchingTrack(goal);
  res.json({ track });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
