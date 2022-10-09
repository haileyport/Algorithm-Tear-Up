function solution(left, right) {
  let answer = 0;
  //left부터 right까지 다 더하는 과정에서 짝수를 만나면 더하고 홀수를 만나면 빼는 방식
  //left~right까지의 모든 수의 약수를 각각 구하고 변수에 저장
  //약수의 개수를 구한 다음 변수에 저장
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
