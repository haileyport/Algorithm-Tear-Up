function solution(s) {
  const stack = [];
  let result = 0;
  let isRight = true;
  if (s.length % 2 === 1) return 0;

  for (let i = 0; i < s.length; i++) {
    let candidate = s.slice(i) + s.slice(0, i);
    isRight = true;
    for (let word of candidate) {
      if (word === "(" || word === "{" || word === "[") stack.push(word);
      else {
        let leftWord = stack.pop();
        if (word === ")" && leftWord === "(") continue;
        if (word === "}" && leftWord === "{") continue;
        if (word === "]" && leftWord === "[") continue;
        isRight = false;
        break;
      }
    }
    if (isRight) result++;
  }
  return result;
}
