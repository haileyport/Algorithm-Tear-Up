// level 1
// 하샤드 수
function solution(x) {
  var answer = true;

  const nums = String(x).split("").map(Number);
  const sum = nums.reduce((acc, cur) => acc + cur);

  // 나머지가 0이 아니면
  if (x % sum) answer = false;

  return answer;
}
