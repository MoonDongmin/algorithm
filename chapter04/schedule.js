function schedule(n, jobs) {
  // 1. 보상이 큰 순서대로 정렬
  jobs.sort((a, b) => b[2] - a[2]);

  // 2. 최대 마감 기한 찾기
  let maxDeadline = Math.max(...jobs.map(job => job[1]));

  // 3. 시간 슬롯 배열 (-1은 빈 슬롯)
  let slots = Array(maxDeadline).fill(-1);

  // 4. 작업 배치
  for (let i = 0; i < n; i++) {
    let [jobId, deadline, profit] = jobs[i];

    // 마감 기한 내에서 가능한 가장 늦은 슬롯 찾기
    for (let j = deadline - 1; j >= 0; j--) {
      if (slots[j] === -1) {
        slots[j] = jobId; // 작업 배치
        break;
      }
    }
  }

  // 5. 최적 작업 순서 반환 (빈 슬롯 제거)
  return slots.filter(job => job !== -1);
}

// 테스트 실행
let jobs = [
  [1, 3, 40],
  [2, 1, 35],
  [3, 1, 30],
  [4, 3, 25],
  [5, 1, 20],
  [6, 3, 15],
  [7, 2, 10],
];

console.log(schedule(jobs.length, jobs));
