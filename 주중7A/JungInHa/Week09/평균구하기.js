function solution(arr) {
  let answer = arr.reduce((acc, cur) => acc + cur) / arr.length;
  return answer;
}