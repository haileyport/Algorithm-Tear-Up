function solution(absolutes, signs) {
  let result = 0;
  signs.forEach((sign, idx) => 
    result += sign ? absolutes[idx] : -absolutes[idx]);
  return result;
}
