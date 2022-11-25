/*
테스트 1 〉	통과 (0.09ms, 33.5MB)
테스트 2 〉	통과 (0.02ms, 33.5MB)
테스트 3 〉	통과 (0.13ms, 33.4MB)
테스트 4 〉	통과 (0.02ms, 33.4MB)
테스트 5 〉	통과 (0.02ms, 33.5MB)
테스트 6 〉	통과 (0.09ms, 33.6MB)
테스트 7 〉	통과 (0.02ms, 33.4MB)
테스트 8 〉	통과 (0.02ms, 33.3MB)
테스트 9 〉	통과 (0.11ms, 33.4MB)
테스트 10 〉	통과 (0.02ms, 33.6MB)
테스트 11 〉	통과 (0.02ms, 33.5MB)
테스트 12 〉	통과 (0.36ms, 33.4MB)
테스트 13 〉	통과 (0.02ms, 33.4MB)
테스트 14 〉	통과 (0.02ms, 33.5MB)
*/
// a: b개를 얻으려면 줘야하는 콜라수, b: 교환시 주는콜라수  n: 가지고 있는 콜라
function solution(a, b, n) {
  let rest = n; //남은 콜라개수
  let count = 0; //총 콜라교환 개수
  let get = 0; //얻은 콜라
  while (rest >= a) {
    get = Math.floor(rest / a) * b; //비례식
    count += get;
    rest = (rest % a) + get; //남은콜라 + 교환받은 콜라
  }

  return count;
}

solution(3, 1, 20);
