function solution(str) {
  //15가 들어올 경우 이진법 연산을 통해 변환한 후의 길이
  const countOne = str.toString(2).match(/1/g).length;
  while (true) {
    str++;
    if (countOne === str.toString(2).match(/1/g).length) break;
  }
  return str;
}
