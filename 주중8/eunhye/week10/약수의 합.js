//약수의 합 - 3분
//O(n)만 생각나서 그렇게 풀었는데 2점ㅎㅎ..

function solution(n) {
  let answer = 0;

  for (i = 1; i <= n; i++) {
    answer = n % i === 0 ? (answer += i) : answer;
  }

  return answer;
}
