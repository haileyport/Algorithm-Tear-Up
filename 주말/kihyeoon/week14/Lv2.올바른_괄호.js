solution("(())()");

function solution(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      if (arr.pop() !== "(") return false;
    } else arr.push(s[i]);
  }
  return arr.length === 0;
}

function solution2(s) {
  let bracket = 0;
  for (const el of s) {
    bracket += el === "(" ? 1 : -1;
    if (bracket < 0) return false;
  }
  return bracket === 0;
}