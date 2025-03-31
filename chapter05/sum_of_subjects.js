function sumOfSubsets(i, weight, total, w, include, W) {
  if (promising(i, weight, total, w, W)) {
    if (weight === W) {
      console.log(include.slice(1, i + 1)); // include[1]부터 include[i]까지 출력
    } else {
      include[i + 1] = 'yes'; // w[i + 1] 포함
      sumOfSubsets(i + 1, weight + w[i + 1], total - w[i + 1], w, include, W);
      include[i + 1] = 'no'; // w[i + 1] 미포함
      sumOfSubsets(i + 1, weight, total - w[i + 1], w, include, W);
    }
  }
}

function promising(i, weight, total, w, W) {
  return weight + total >= W && (weight === W || weight + w[i + 1] <= W);
}

const w = [0, 10, 7, 5, 18, 12, 20, 15];
const W = 35; // 배낭 최대 무게
const include = new Array(w.length).fill(null); // 포함 여부 배열
sumOfSubsets(0, 0, w.reduce((a, b) => a + b, 0), w, include, W);
console.log(w.reduce((a, b) => a + b, 0));
