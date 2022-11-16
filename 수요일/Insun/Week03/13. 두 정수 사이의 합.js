function solution(a, b) {
  // a, b가 같으면 둘 중 아무거나 리턴
  let sum = 0;

  if (a === b) {
    return a;
  } else if (a < b) {
    // a에서 b까지 모든 정수의 합을 리턴
    // 반복문으로 a부터 b까지 돌면 될듯
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }
  return sum;
}
