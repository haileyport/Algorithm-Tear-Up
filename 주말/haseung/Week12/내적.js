function solution(a, b) {
  //반복문 돌려서 a,b 배열의 각각 요소를 곱한 다음 sum
  //a[i]*b[i]+a[i+1]*b[i+1].....

  let answer = 0;

  a.forEach((_, key) => {
    answer += a[key] * b[key];
  });
  return answer;
}
