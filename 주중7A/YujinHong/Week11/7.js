function solution(s) {
  if (s.slice(0, 1) === ")") return false;

  let stack = [];
  for (const el of s) {
    el === "(" ? stack.push(1) : stack.pop();
  }

  // return stack.length === 0 ? true : false
  return stack.length === 0;
}
