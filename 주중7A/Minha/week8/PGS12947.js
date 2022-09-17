function solution(x) {
  let answer = true;
  let arr = String(x).split('');
  const sum = arr.map(el => Number(el)).reduce((acc, cur) => acc + cur);
  (x % sum === 0) ? answer = true : answer = false;
  return answer;
}