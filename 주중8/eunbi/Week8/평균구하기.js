//[PGS] 평균구하기
// 소요시간: 3분 37초 

function solution(arr) {
  // reduce 사용해보자! 
  // reduce로 구한 값을 배열의 길이로 나누어 리턴!
  return arr.reduce((prev,curr) => prev + curr , 0)/ arr.length;
}