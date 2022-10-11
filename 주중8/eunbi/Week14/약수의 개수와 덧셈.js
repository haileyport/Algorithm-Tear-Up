//[PGS] 약수의 개수와 덧셈, +1
// 소요시간 : 20.59분 -> 문제를 잘못 읽었었당 ㅎㅎ...

// 테스트 1 〉	통과 (3.17ms, 35.4MB)
// 테스트 2 〉	통과 (1.54ms, 35.4MB)
// 테스트 3 〉	통과 (1.57ms, 35.3MB)
// 테스트 4 〉	통과 (1.69ms, 35.5MB)
// 테스트 5 〉	통과 (3.74ms, 35.4MB)
// 테스트 6 〉	통과 (1.04ms, 35.4MB)
// 테스트 7 〉	통과 (0.80ms, 35.4MB)

// 약수 개수를 구하는 함수를 따로 만들어 solution 함수에서 호출
// left부터 right까지 반복하며 getDivisor 함수에서의 리턴값(약수의 개수)이
// 짝수인지 홀수인지 구분하여 result에 값을 연산해주고 result를 리턴 

function solution(left, right) {
  let result = 0; 
  
  while(left <= right){
      let count = getDivisor(left);
      
      if(count%2 === 0) result += left;
      else result -= left; 
      left++;
  }
  
  return result;
}

function getDivisor(num){
  let count = 0; 
  
  for(let i = 1; i <= num; i++){
      if(num % i === 0) {
          count++; 
      }
  }
  
  return count;
}

// 제곱근이 정수면 약수의 개수가 홀수.....(기억하자)