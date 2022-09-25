function solution(arr) {
  // arr의 모든 원소들을 전부 순회하면서
  // arr[i] === arr[i+1]이면 arr[i+1] 삭제
  return arr.filter((el, i) => el !== arr[i + 1]);
}
