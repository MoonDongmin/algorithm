function knapsack2(n, p, w, W, maxprofit) {
  const Q = [];

  class Node {
    constructor(level, profit, weight) {
      this.level = level;
      this.profit = profit;
      this.weight = weight;
    }
  }

  const root = new Node(-1, 0, 0);
  Q.push(root);

  maxprofit.value = 0;

  while (Q.length > 0) {
    const v = Q.shift();

    const u1 = new Node(v.level + 1, v.profit, v.weight);
    if (u1.level < n) {
      u1.profit = v.profit + p[u1.level];
      u1.weight = v.weight + w[u1.level];

      if (u1.weight <= W && u1.profit > maxprofit.value) {
        maxprofit.value = u1.profit;
      }

      const bound1 = bound(u1, n, p, w, W);
      if (bound1 > maxprofit.value) {
        Q.push(u1);
      }
    }

    const u2 = new Node(v.level + 1, v.profit, v.weight);
    if (u2.level < n) {
      const bound2 = bound(u2, n, p, w, W);
      if (bound2 > maxprofit.value) {
        Q.push(u2);
      }
    }
  }
}

function bound(u, n, p, w, W) {
  if (u.weight >= W) {
    return 0;
  } else {
    let profitBound = u.profit;
    let j = u.level + 1;
    let totalWeight = u.weight;
    while (j < n && totalWeight + w[j] <= W) {
      totalWeight += w[j];
      profitBound += p[j];
      j++;
    }
    if (j < n) {
      profitBound += (W - totalWeight) * p[j] / w[j];
    }
    return profitBound;
  }
}

const n = 4;
const p = [10, 10, 12, 18];
const w = [2, 4, 6, 9];
const W = 15;
const maxProfit = {value: 0};

knapsack2(n, p, w, W, maxProfit);

console.log('최대이익:', maxProfit.value);
