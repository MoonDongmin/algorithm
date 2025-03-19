function kruskal(n, m, E) {
  E.sort((a, b) => a[2] - b[2]); // 가중치 기준 오름차순 정렬

  let parent = new Array(n + 1).fill(0).map((_, i) => i);
  let rank = new Array(n + 1).fill(0);
  console.log(parent, rank);

  // [1, 2, 1],
  //   [1, 3, 3],
  //   [2, 3, 2],
  //   [2, 4, 4],
  //   [3, 4, 5],

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]); // 경로 압축
    }
    return parent[x];
  }

  function merge(x, y) {
    let rootX = find(x);
    let rootY = find(y);

    if (rootX !== rootY) {
      if (rank[rootX] > rank[rootY]) {
        parent[rootY] = rootX;
      } else if (rank[rootX] < rank[rootY]) {
        parent[rootX] = rootY;
      } else {
        parent[rootY] = rootX;
        rank[rootX]++;
      }
    }
  }

  let F = []; // 최소 신장 트리(MST)의 간선 집합

  for (let [i, j, weight] of E) {
    if (find(i) !== find(j)) {
      merge(i, j);
      F.push([i, j, weight]);
      if (F.length === n - 1) break; // MST 완성
    }
  }

  return F;
}

const n = 4;  // 노드 개수
const m = 5;  // 간선 개수
const E = [
  [1, 2, 1],
  [1, 3, 3],
  [2, 3, 2],
  [2, 4, 4],
  [3, 4, 5],
];

console.log(kruskal(n, m, E));
