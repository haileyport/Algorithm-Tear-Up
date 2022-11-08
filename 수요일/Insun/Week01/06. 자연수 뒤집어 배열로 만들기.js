function solution(n) {
  // n을 문자열로 바꿈
  // reverse를 사용한 후 map으로 넘버 타입으로 바꿔주기
  let num = String(n).split("").reverse();
  let reverseArr = num.map((el) => Number(el));
  return reverseArr;
}
