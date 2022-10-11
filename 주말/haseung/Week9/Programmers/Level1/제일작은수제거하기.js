function solution(arr) {
  let answer = [];
  let min = Math.min(...arr); // 1\
  console.log(min);
  arr.splice(arr.indexOf(min), 1);
  answer = arr.length === 0 ? [-1] : arr;
  return answer;
}

console.log(solution([4, 3, 2, 1]));
