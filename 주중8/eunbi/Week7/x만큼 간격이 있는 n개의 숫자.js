// [프로그래머스] x만큼 간격이있는 n개의 숫자 /8분 32초
function solution(x, n) {
  let answer = [];

  // Array 생성자 사용하려다가 성능면에서 for문이 나을 듯 하여 for문 사용!
  // 가독성 vs 성능 무엇을 우선시 하여 풀어야할까?
  for(let i = 1; i <= n; i++){
      answer.push(x * i);
  }

  return answer;
}