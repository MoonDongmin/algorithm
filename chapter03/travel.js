function tsp(n, W) {
  // D: 도시 i를 방문 집합 A를 지나서 1번으로 돌아가는 최소 비용
  // P: i에서 A를 방문할 때, 최적 경로에서 마지막 방문한 도시
  let D = Array.from({length: n + 1}, () => ({}));
  let P = Array.from({length: n + 1}, () => ({}));

  // 초기 설정: 각 도시에서 1번으로 가는 비용 저장
  for (let i = 2; i <= n; i++) {
    D[i]['{}'] = W[i][1];
  }
  console.log(D);

  // 방문하는 도시 개수별로 탐색
  for (let k = 1; k <= n - 2; k++) {
    for (const A of getSubsets(n, k)) {
      for (let i = 2; i <= n; i++) {
        if (A.has(i)) continue; // i가 이미 방문한 곳이면 스킵

        let minCost = Infinity;
        let bestJ = -1;

        for (let j of A) {
          let cost = W[i][j] + (D[j][setToString(removeFromSet(A, j))] || Infinity);

          if (cost < minCost) {
            minCost = cost;
            bestJ = j;
          }
        }

        D[i][setToString(A)] = minCost;
        P[i][setToString(A)] = bestJ;
      }
    }
  }

  // 마지막으로 1번 도시로 돌아오는 비용 계산
  let fullSet = new Set([...Array(n + 1).keys()].slice(2));
  let minCost = Infinity;
  let bestJ = -1;

  for (let j = 2; j <= n; j++) {
    let cost = W[1][j] + (D[j][setToString(removeFromSet(fullSet, j))] || Infinity);
    if (cost < minCost) {
      minCost = cost;
      bestJ = j;
    }
  }

  return {minLength: minCost, pathTable: P};
}

// 크기가 k인 부분집합을 생성해 탐색
function getSubsets(n, k) {
  let subsets = [];
  let elements = [...Array(n + 1).keys()].slice(2);
  console.log(elements);

  function generate(subset, index) {
    if (subset.size === k) {
      subsets.push(new Set(subset));
      return;
    }
    for (let i = index; i < elements.length; i++) {
      subset.add(elements[i]);
      generate(subset, i + 1);
      subset.delete(elements[i]);
    }
  }

  generate(new Set(), 0);
  return subsets;
}

// Set을 문자열로 변환 (메모이제이션용)
function setToString(set) {
  return `{${[...set].join(',')}}`;
}

// Set에서 특정 원소 제거
function removeFromSet(set, value) {
  let newSet = new Set(set);
  newSet.delete(value);
  return newSet;
}

let W = [
  [],
  [0, 0, 10, 15, 20],
  [0, 10, 0, 35, 25],
  [0, 15, 35, 0, 30],
  [0, 20, 25, 30, 0],
];

let result = tsp(4, W);
console.log('최소 비용:', result.minLength);
console.log('경로 테이블:', result.pathTable);
