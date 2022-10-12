// [PGS] 나누어 떨어지는 숫자 배열, +1
// 소요시간 3.58분

// 정렬된 배열을 리턴해주어야 하므로 미리 오름차순 정렬을 시켜준 후 divisor로 나누기 시도 
// filter 메서드를 이용하여 나누어 떨어지는 요소만 존재하는 배열을 result 변수에 담아주기
// result 가 빈 배열이라면 -1을 담은 배열 리턴 아니라면 result 리턴! 

function solution(arr, divisor) {
  let result = arr.sort((a, b) => a - b).filter(el => el % divisor === 0);
  return result.length === 0 ? [-1] : result ;
}