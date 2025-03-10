function dijkstra(n, W) {
  const INF = Number.MAX_SAFE_INTEGER;
  let length = new Array(n + 1).fill(INF);
  let touch = new Array(n + 1).fill(0);
  let F = []; // 최단 경로 저장

  const start = 1; // 시작 정점 고정

  length[start] = 0; // 시작 정점의 거리 초기화

  for (let i = 1; i <= n; i++) {
    if (i !== start) {
      touch[i] = start;
      length[i] = W[start][i];
    }
  }

  for (let _ = 1; _ < n; _++) { // n-1번 반복
    let min = INF;
    let vnear = -1;

    for (let i = 1; i <= n; i++) {
      if (length[i] >= 0 && length[i] < min) {
        min = length[i];
        vnear = i;
      }
    }

    if (vnear === -1) break; // 모든 정점 방문 완료

    F.push([touch[vnear], vnear, min]);

    for (let i = 1; i <= n; i++) {
      if (W[vnear][i] > 0 && length[vnear] + W[vnear][i] < length[i]) {
        length[i] = length[vnear] + W[vnear][i];
        touch[i] = vnear;
      }
    }

    length[vnear] = -1; // 방문 완료 처리
  }

  return F;
}

const INF = Number.MAX_SAFE_INTEGER;
const n = 5;
const W = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 10, INF, 30, 100],
  [0, INF, 0, 50, INF, INF],
  [0, INF, INF, 0, INF, 10],
  [0, INF, INF, 20, 0, 60],
  [0, INF, INF, INF, INF, 0]
];

console.log(dijkstra(n, W));
