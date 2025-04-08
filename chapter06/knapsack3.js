class Node {
  constructor(level = 0, profit = 0, weight = 0, bound = 0) {
    this.level = level;
    this.profit = profit;
    this.weight = weight;
    this.bound = bound;
  }
}

class PriorityQueue {
  constructor() {
    this.nodes = [];
  }

  insert(node) {
    this.nodes.push(node);
    this.nodes.sort((a, b) => b.bound - a.bound); // Max-heap style
  }

  remove() {
    return this.nodes.shift();
  }

  isEmpty() {
    return this.nodes.length === 0;
  }
}

function bound(u, n, W, p, w) {
  if (u.weight >= W) return 0;

  let profitBound = u.profit;
  let j = u.level + 1;
  let totWeight = u.weight;

  while (j < n && totWeight + w[j] <= W) {
    totWeight += w[j];
    profitBound += p[j];
    j++;
  }

  if (j < n) {
    profitBound += (W - totWeight) * (p[j] / w[j]);
  }

  return profitBound;
}

function knapsack3(n, p, w, W) {
  const PQ = new PriorityQueue();
  let maxProfit = 0;

  const v = new Node();
  v.bound = bound(v, n, W, p, w);
  PQ.insert(v);

  while (!PQ.isEmpty()) {
    const v = PQ.remove();

    if (v.bound > maxProfit) {
      const u = new Node();
      u.level = v.level + 1;

      // 포함하는 경우
      u.weight = v.weight + w[u.level];
      u.profit = v.profit + p[u.level];

      if (u.weight <= W && u.profit > maxProfit) {
        maxProfit = u.profit;
      }

      u.bound = bound(u, n, W, p, w);
      if (u.bound > maxProfit) {
        PQ.insert(u);
      }

      // 포함하지 않는 경우
      const u2 = new Node();
      u2.level = u.level;
      u2.weight = v.weight;
      u2.profit = v.profit;
      u2.bound = bound(u2, n, W, p, w);
      if (u2.bound > maxProfit) {
        PQ.insert(u2);
      }
    }
  }

  return maxProfit;
}

const p = [10, 10, 12, 18];
const w = [2, 4, 6, 9];
const W = 15;

const n = p.length;
const result = knapsack3(n, p, w, W);
console.log('최대값:', result);
