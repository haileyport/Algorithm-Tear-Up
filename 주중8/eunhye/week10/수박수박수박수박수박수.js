// 1점 수집가 😣😣

function solution(n) {
  let answer = "";
  if (n % 2 === 0) {
    answer = "수박".repeat(n / 2);
  } else {
    answer = "수박".repeat(Math.floor(n / 2)) + "수";
  }
  return answer;
}
