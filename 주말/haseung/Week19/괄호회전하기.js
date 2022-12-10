function solution(s) {
  const pair = { "}": "{", "]": "[", ")": "(" };

  const arr = s.split("");
  let result = 0;
  const isValid = (arr) => {
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (pair[element] === undefined) stack.push(element);
      else {
        if (stack[stack.length - 1] !== pair[element]) return false;
        stack.pop();
      }
    }
    if (stack.length) return false;
    return true;
  };
  for (let i = 0; i < s.length; i++) {
    if (isValid(arr)) result++;
    arr.push(arr.shift());
  }
  return result;
}
