function jobScheduling(jobs) {
  // 작업을 보상(profit) 기준으로 내림차순 정렬
  jobs.sort((a, b) => b.profit - a.profit);

  // 최대 마감 시간을 찾기
  let maxDeadline = Math.max(...jobs.map(job => job.deadline));

  // 각 시간을 나타내는 배열을 생성 (초기에는 null)
  let schedule = new Array(maxDeadline).fill(null);
  let totalProfit = 0;

  // 각 작업을 가능한 늦은 시간 슬롯에 배치
  for (let job of jobs) {
    for (let i = job.deadline - 1; i >= 0; i--) {
      if (schedule[i] === null) {
        schedule[i] = job;
        totalProfit += job.profit;
        console.log(schedule);
        break;
      }
    }
  }

  // 배정된 작업 출력
  console.log("스케줄링", schedule.filter(job => job !== null).map(job => job.id));
  console.log("총 이익:", totalProfit);
}

// 입력 데이터
const jobs = [
  { id: 1, deadline: 3, profit: 40 },
  { id: 2, deadline: 1, profit: 35 },
  { id: 3, deadline: 1, profit: 30 },
  { id: 4, deadline: 3, profit: 25 },
  { id: 5, deadline: 1, profit: 20 },
  { id: 6, deadline: 3, profit: 15 },
  { id: 7, deadline: 2, profit: 10 },
];

jobScheduling(jobs);
