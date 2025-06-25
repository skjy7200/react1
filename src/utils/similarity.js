const defaultTracks = [
  "인공지능 시스템", "메타버스 플랫폼", "클라우드 컴퓨팅", "공간비주얼 SW",
  "인터랙티브 플랫폼", "지능형 에이전트", "AI 콘텐츠", "데이터 인텔리전스"
];

// ✅ 각 트랙 이름 → 관련 키워드 확장 (유사도 비교용)
const trackAliasMap = {
  "인공지능 시스템": "ai 인공지능 개발자 머신러닝 시스템",
  "메타버스 플랫폼": "메타버스 가상현실 디자이너 플랫폼 xr",
  "클라우드 컴퓨팅": "클라우드 컴퓨팅 서버 백엔드 네트워크",
  "공간비주얼 SW": "3d 시각화 공간 모델링 시뮬레이션",
  "인터랙티브 플랫폼": "ui ux 인터랙션 프론트엔드 디자이너",
  "지능형 에이전트": "지능형 에이전트 강화학습 챗봇 에이아이",
  "AI 콘텐츠": "ai 콘텐츠 생성형 영상 편집 콘텐츠제작",
  "데이터 인텔리전스": "데이터 분석 데이터과학 빅데이터 시각화"
};

export function getBestMatchingTrack(goal, tracks = defaultTracks) {
  if (!goal || goal.trim().length === 0) return "";

  const normalize = (text) => text.toLowerCase().replace(/\s/g, "");
  const input = normalize(goal);
  let bestTrack = "";
  let bestScore = 0;

  tracks.forEach((track) => {
    const alias = trackAliasMap[track] || track;
    const score = getSimilarity(normalize(alias), input);
    if (score > bestScore) {
      bestScore = score;
      bestTrack = track;
    }
  });

  // ✅ 0.1 이상이면 허용 (트랙 alias와 비교하기 때문)
  return bestScore >= 0.1 ? bestTrack : "";
}

function getSimilarity(a, b) {
  const getNGrams = (str, n = 2) => {
    const result = new Set();
    for (let i = 0; i < str.length - n + 1; i++) {
      result.add(str.slice(i, i + n));
    }
    return result;
  };

  const aGrams = getNGrams(a);
  const bGrams = getNGrams(b);

  const intersection = [...aGrams].filter((gram) => bGrams.has(gram));
  const union = new Set([...aGrams, ...bGrams]);

  return union.size === 0 ? 0 : intersection.length / union.size;
}
