function solution(s) {
  let number = "1234567890";
  let result = false;

  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      if (number.includes(s[i]) === true) {
        result = true;
      } else {
        result = false;
        break;
      }
    }
  }
  return result;
}
