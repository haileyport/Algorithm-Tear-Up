function solution(progresses, speeds) {
  let answer = [];
  let days = 1;
  let cnt = 0;
  let progress = 0;

  while (progresses[0]) {
    progress = progresses[0] + speeds[0] * days;
    if (progress >= 100) {
      cnt++;
      progresses.shift();
      speeds.shift();
    } else {
      if (cnt > 0) answer.push(cnt);
      days++;
      cnt = 0;
    }
  }
  answer.push(cnt);
  return answer;
}
