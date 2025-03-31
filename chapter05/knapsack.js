// 전역 변수 정의
let W;
let p;
let w;
let n;
let maxprofit;
let numbest;
let bestset;
let include;

function knapsack(i, profit, weight) {
  if (weight <= W && profit > maxprofit) {
    maxprofit = profit;
    numbest = i;
    bestset = include.slice(); // 배열 복사
  }

  if (promising(i, profit, weight)) {
    include[i + 1] = 'yes';
    knapsack(i + 1, profit + p[i + 1], weight + w[i + 1]);
    include[i + 1] = 'no';
    knapsack(i + 1, profit, weight);
  }
}

function promising(i, profit, weight) {
  if (weight >= W) {
    return false;
  } else {
    let j = i + 1;
    let bound = profit;
    let totweight = weight;

    while (j <= n && totweight + w[j] <= W) {
      totweight += w[j];
      bound += p[j];
      j++;
    }

    let k = j;
    if (k <= n) {
      bound = bound + (W - totweight) * p[k] / w[k];
    }

    return bound > maxprofit;
  }
}

// 예시 실행
W = 16;
p = [0, 40, 30, 50, 10];
w = [0, 2, 5, 10, 5];
n = p.length - 1;
maxprofit = 0;
numbest = 0;
bestset = [];
include = new Array(n + 1).fill('no');

knapsack(0, 0, 0);

console.log('Max Profit:', maxprofit);
console.log('Num Best:', numbest);
console.log('Best Set:', bestset);
