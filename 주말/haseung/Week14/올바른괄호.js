function solution(s) {
  let stack = [];
  for (let c of s) {
    if (c === "(") {
      stack.push(c);
      // 스택이 비어있을 경우에 대한 예외 처리
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}
