// [PGS] N개의 최소공배수 / leve1
// 난이도 :  level 2
// 풀이시간 : 실패

/*
문제
두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

제한 사항
arr은 길이 1이상, 15이하인 배열입니다.
arr의 원소는 100 이하인 자연수입니다.

입출력 예
arr	result
[2,6,8,14]	168
[1,2,3]	6

/*
< 의사코드 >
1. arr의 배열 중 제일 큰 숫자를 찾아 그 숫자를for문으로 돌면서 arr[j]를 i로 나누어
    if문으로 떨어지는 숫자만 newArr에 담아준다
2. newArr에서 겹치는 숫자를 지워준다
3. newArr를 reduce로 모두 곱한다
4. newArr를 return
*/

function solution(arr) {
  let newArr = [];
   for(let i = 0; i < arr.length; i++) {
       for(let j = 1; j <= arr[i]; j++) {
           if(arr[i] % j === 0) {
               newArr.push(j);
           }
       }
   }

    newArr = Array.from(new Set(newArr));
console.log(newArr)
   let result = [];
   for(let i = 0; i < newArr.length; i++) {
       for(let j = 1; j <= newArr[i]; j++) {
           if(newArr[i] % j === 0) {
               result.push(j)
           }
       }
   }    
    result = Array.from(new Set(result));
   console.log(result)
   return newArr.reduce((a, b) => a * b)
}

/*
실패
*/
// 전에 풀이했던 최소공배수 구하는 식 가져오기
function solutionLcm() {
  let lcm = 1
  while(true) {
      if(lcm % n == 0 && lcm % m == 0) {
          break;
      }
      lcm++;
  }
  return lcm;
}

function solution(arr) {
  // 모두 곱할 수 있는 방법
  //  reduce((a,b)=>a*b)
  return solutionLcm(...arr);
}
