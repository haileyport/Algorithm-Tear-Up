function solution(arr, divisor) {
  // element 중 divisor로 나눠 떨어지는 값
  // 값을 오름차순으로 정렬
  // 배열로 반환
  // 나눠 떨어지는 값이 없다면 -1을 배열에 담아 반환
  let newArr = [];
  let result = [];

  for (let el of arr) {
    if (el % divisor === 0) {
      newArr.push(el);
      result = newArr.sort((a, b) => a - b);
    }
  }
  if (newArr.length === 0) {
    result.push(-1);
  }
  return result;
}
