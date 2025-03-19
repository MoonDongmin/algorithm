function prim(n, W) {
  let F = []; // MST의 edge 집합
  let nearest = new Array(n + 1).fill(0);
  let distance = new Array(n + 1).fill(Infinity);

  // 초기화: 모든 정점의 초기 거리와 가장 가까운 정점 설정
  for (let i = 2; i <= n; i++) {
    nearest[i] = 1;
    distance[i] = W[1][i];
  }
  console.log(nearest, distance);

  // (n-1)개의 정점을 추가
  for (let _ = 0; _ < n - 1; _++) {
    let min = Infinity;
    let vnear = -1;

    // 가장 가까운 정점 찾기
    for (let i = 2; i <= n; i++) {
      if (distance[i] >= 0 && distance[i] < min) {
        min = distance[i];
        vnear = i;
      }
    }

    // 선택된 정점과 연결된 edge를 MST에 추가
    F.push([vnear, nearest[vnear]]);
    console.log(F);

    // 선택된 정점 vnear를 Y 집합에 추가
    distance[vnear] = -1;

    // 거리 갱신
    for (let i = 2; i <= n; i++) {
      if (W[i][vnear] < distance[i]) {
        distance[i] = W[i][vnear];
        nearest[i] = vnear;
      }
    }
  }

  return F; // 최소 신장 트리의 edge 집합 반환
}

let W = [
  [0, 0, 0, 0],
  [0, 0, 2, 3],
  [0, 2, 0, 1],
  [0, 3, 1, 0],
];
console.log(prim(3, W));
