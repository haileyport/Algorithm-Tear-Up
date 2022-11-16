function solution(arr) {
  // 배열이 정렬되면 안됨
  // arr 배열이 1인 경우 제일 작은 수를 제거하면 -1 리턴
  // if(arr.length === 1) return [-1]
  // 제일 작은 수를 찾기
  let result = [];
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  arr.length >= 1 ? (result = arr) : (result = [-1]);
  return result;
}
