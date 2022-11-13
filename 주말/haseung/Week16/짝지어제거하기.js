function solution(s) {
  let cnt = 0;
  let answer;
  let stack = [];
  for (let i of s) {
    if (stack[stack.length - 1] === i) {
      stack.pop();
      cnt++;
    } else {
      stack.push(i);
    }
  }

  s.length / 2 == cnt ? (answer = 1) : (answer = 0);
  return answer;
}
