//[PGS] 소수 만들기 , +4 

// 재귀가 하고 싶었으나 머리가 굳어버렸습니다...
// 테스트 1 〉	통과 (1.29ms, 35.6MB)
// 테스트 2 〉	통과 (1.73ms, 35.8MB)
// 테스트 3 〉	통과 (0.33ms, 33.5MB)
// 테스트 4 〉	통과 (0.31ms, 33.5MB)
// 테스트 5 〉	통과 (38.01ms, 36.7MB)
// 테스트 6 〉	통과 (2.07ms, 35.8MB)
// 테스트 7 〉	통과 (0.25ms, 33.4MB)
// 테스트 8 〉	통과 (29.59ms, 37.4MB)
// 테스트 9 〉	통과 (0.99ms, 35.5MB)
// 테스트 10 〉	통과 (4.28ms, 35.8MB)
// 테스트 11 〉	통과 (0.18ms, 33.5MB)
// 테스트 12 〉	통과 (0.16ms, 33.5MB)
// 테스트 13 〉	통과 (0.18ms, 33.5MB)
// 테스트 14 〉	통과 (0.17ms, 33.4MB)
// 테스트 15 〉	통과 (0.16ms, 33.4MB)
// 테스트 16 〉	통과 (32.18ms, 37.4MB)
// 테스트 17 〉	통과 (3.18ms, 35.5MB)
// 테스트 18 〉	통과 (0.21ms, 33.4MB)
// 테스트 19 〉	통과 (0.10ms, 33.4MB)
// 테스트 20 〉	통과 (4.61ms, 35.8MB)
// 테스트 21 〉	통과 (5.17ms, 35.9MB)
// 테스트 22 〉	통과 (20.82ms, 36.4MB)
// 테스트 23 〉	통과 (0.06ms, 33.4MB)
// 테스트 24 〉	통과 (4.44ms, 35.9MB)
// 테스트 25 〉	통과 (4.77ms, 35.8MB)
// 테스트 26 〉	통과 (0.06ms, 33.5MB)

// 소수 구하는 함수
const isPrime = (num) => {
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0) return false; //소수가 아닌경우
  }
  return true; // 소수인 경우
}

function solution(nums) {
  let count = 0; // 3개의 수의 합이 소수인 개수를 담을 변수
  
 for(let i = 0; i < nums.length-2; i++){
     for(let j = i+1; j < nums.length-1; j++){
         for(let n = j+1; n < nums.length; n++){
             let sum = nums[i]+nums[j]+nums[n];

             if(isPrime(sum)) count++;
         }
     }
 }
  
  return count; 
}

// 재귀로 푼 다른사람 풀이 
// 소수일 때 true 반환하는 함수
function primeNum(num) {
  for (let i=2; i < num; i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}

// 조합 함수
function combinations(arr, selectNum) {
  const result = [];

  if (selectNum === 1) {
      return arr.map(value => [value]);
  };

  arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index+1);
      const reCombinations = combinations(rest, selectNum-1);
      const attached = reCombinations.map(combination => [fixed, ...combination]);

      result.push(...attached);
  });
  return result;
};

function solution(nums) {
  let primeNumCnt = 0;

  const combinationArr = combinations(nums, 3);

  combinationArr.forEach(elem => {
      let tmp = elem.reduce((a,b)=>a+b);
      
      if (primeNum(tmp) === true) {
          primeNumCnt += 1
      }
  });
  
  return primeNumCnt;

  // 출처: https://dapsu-startup.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%86%8C%EC%88%98-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8JavaScript