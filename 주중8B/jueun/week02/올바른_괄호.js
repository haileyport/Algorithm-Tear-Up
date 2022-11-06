function solution(s) {
  let left = 0,
    right = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") left++;
    else right++;
    if (left < right) return false;
  }

  return left === right ? true : false;
}
