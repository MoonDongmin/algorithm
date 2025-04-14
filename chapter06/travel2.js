function travel2(n, W, optTour, minLengthRef) {
  const PQ = [];
  let u;
  let v = {
    level: 0,
    path: [1],
    bound: bound([1], W),
  };

  let minLength = Infinity;
  insert(PQ, v);

  while (PQ.length > 0) {
    v = remove(PQ);

    if (v.bound < minLengthRef.value) {
      for (let i = 2; i <= n; i++) {
        if (!v.path.includes(i)) {
          u = {
            level: v.level + 1,
            path: [...v.path, i],
            bound: 0,
          };

          if (u.level === n - 2) {
            for (let j = 2; j <= n; j++) {
              if (!u.path.includes(j)) {
                u.path.push(j);
                break;
              }
            }
            u.path.push(1);

            const len = length(u.path, W);
            if (len < minLengthRef.value) {
              minLengthRef.value = len;
              optTour.length = 0;
              optTour.push(...u.path);
            }
          } else {
            u.bound = bound(u.path, W);
            if (u.bound < minLengthRef.value) {
              insert(PQ, u);
            }
          }
        }
      }
    }
  }
}

function insert(pq, node) {
  pq.push(node);
  pq.sort((a, b) => a.bound - b.bound);
}

function remove(pq) {
  return pq.shift();
}

function length(path, W) {
  let total = 0;
  for (let i = 0; i < path.length - 1; i++) {
    total += W[path[i] - 1][path[i + 1] - 1];
  }
  return total;
}

function bound(path, W) {
  let estimate = length(path, W);
  const visited = new Set(path);
  const last = path[path.length - 1] - 1;

  for (let i = 0; i < W.length; i++) {
    if (!visited.has(i + 1)) {
      let minEdge = Infinity;
      for (let j = 0; j < W.length; j++) {
        if (i !== j && (!visited.has(j + 1) || j === 0)) {
          minEdge = Math.min(minEdge, W[i][j]);
        }
      }
      estimate += minEdge;
    }
  }

  return estimate;
}

const W = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0],
];

const optTour = [];
const minLengthRef = {value: Infinity};

travel2(4, W, optTour, minLengthRef);

console.log('최단 거리:', minLengthRef.value);
console.log('최적 경로:', optTour);
