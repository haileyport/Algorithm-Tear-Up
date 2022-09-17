// [PGS] 콜라츠 추측 
// 소요시간 : 27분 25초 

function collatz (num) {
  num % 2 === 0 ? num = num / 2 : num = (num * 3) + 1; // 실수로 나누기 연산자를 나머지 연산자로 사용...바보ㅠ
  return num; 
}

function solution(num) {
  // num !== 1 이라면 콜라츠 함수 실행
  // 콜라츠 함수는 콜라츠 추측을 코드화한 실행문이 담겨있음 
  // num === 1이 될때까지 작업, 함수가 실행될 때마다 count라는 변수에 1씩 증감
  // 만약 count 가 500이 되면 -1 반환 
  let count = 0; 
  
  while(num !== 1 && count !== 500) {
      num = collatz(num); // num 에 재할당을 안해줘서 500번 계속 돌았었다 휴; 
      count++;
  }
  
  if(count >= 500) return -1;
  if(num === 1) return count; 
}
