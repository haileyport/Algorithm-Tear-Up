const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0].split(' ').map(Number);

function solution(arr) {
  let [dayTime, nightTime, top] = arr;
  let distance = 0;
  let day = 0;

  while (true) {
    // 낮시간이 지나면 dayTime만큼 감
    // 밤시간에는 nightTime 만큼 -
    // 하루 이동거리 = daytime - nightTime

    // 하루가 지나면 day ++
    // 마지막날에는 정상 에서 밤 이동거리를 뺀 목표 까지 등산
    // distance가 target에 도달하면 걸린 일 수 출력

    const distancePerDay = dayTime - nightTime;
    const target = top - nightTime;

    distance += distancePerDay;

    day++;

    if (distance >= target) break;
  }

  console.log(day);
}

solution(input);
