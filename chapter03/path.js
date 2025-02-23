function path(p, q, r) {
  if (p[q][r] !== 0) {
    let k = p[q][r];
    path(p, q, k);    // q에서 k까지의 경로 출력
    console.log(`v${k}`);  // 중간 정점 출력
    path(p, k, r);    // k에서 r까지의 경로 출력
  }
}
