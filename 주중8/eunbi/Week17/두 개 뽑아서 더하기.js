//[PGS] 두 개 뽑아서 더하기, +3

// 테스트 1 〉	통과 (0.12ms, 33.4MB)
// 테스트 2 〉	통과 (0.10ms, 33.5MB)
// 테스트 3 〉	통과 (0.14ms, 33.5MB)
// 테스트 4 〉	통과 (0.11ms, 33.5MB)
// 테스트 5 〉	통과 (0.21ms, 33.6MB)
// 테스트 6 〉	통과 (0.26ms, 33.5MB)
// 테스트 7 〉	통과 (2.33ms, 34.7MB)
// 테스트 8 〉	통과 (2.38ms, 34.7MB)
// 테스트 9 〉	통과 (2.20ms, 34.7MB)

const getSum = (num,arr) => {
  return arr.map(el => num + el);
}

function solution(numbers) {
  let result = [];
     
  numbers.map((el,i) => {
      let arr = [...numbers.slice(0,i),...numbers.slice(i+1)];
    result = result.concat(getSum(el,arr));
 } )
  
  return [...new Set(result)].sort((a,b) => a - b);
}

