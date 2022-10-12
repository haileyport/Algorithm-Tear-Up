//[PGS] 이진 변환 반복하기, +1

// 테스트 1 〉	통과 (0.08ms, 33.4MB)
// 테스트 2 〉	통과 (5.13ms, 36.9MB)
// 테스트 3 〉	통과 (0.08ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.4MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.13ms, 33.4MB)
// 테스트 7 〉	통과 (0.15ms, 33.5MB)
// 테스트 8 〉	통과 (0.17ms, 33.5MB)
// 테스트 9 〉	통과 (9.32ms, 39MB)
// 테스트 10 〉	통과 (11.18ms, 39.3MB)
// 테스트 11 〉	통과 (6.76ms, 37.2MB)

// 몰랐던 사실! '변환하려는 문자열(수)'.toString(변환하고자하는 진수)를 이용해 진수변환을 해줄 수 있음! 

function solution(s, count = 0, amount = 0) {
    
  if(s === '1') return [count, amount];
  
  let filtered = [...s].filter(el => el !== '0').join('');
  amount += s.length - filtered.length; 
  
  let str = filtered.length.toString(2);
  count++
  return solution(str, count, amount);
}