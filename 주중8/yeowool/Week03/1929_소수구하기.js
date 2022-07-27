// 기본수학2  1929_소수구하기
// 난이도 : 실버3 실패
// 풀이시간 : 00시간
// 메모리 :  KB      
// 시간 :   ms      
// 코드길이 :  B

const { resourceLimits } = require('worker_threads');

// 

// 의사코드
// m ~ n 사이의 숫자를 순회하여 소수를 구한다.
// 소수란 1또는 자기 자신만을 약수로 갖는 수!
// 1. input을 공백으로 split해서 인덱스 0과 1로 구간을 설정해준다.
// 2. 그 범위 안에서 for문으로 2부터 i까지 순회하며 j로 나누어 떨어지는 i를 리턴한다.

// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
// const newArr = input.split(" ");

// const [a, b] = [newArr[0], newArr[1]]

// for(let i = a; i <= b; i++) { //a,b 범위 안에서 순회하기
//   for(let i = 2; j < i; i++) { // 각 숫자마다 2부터 나누기.. 그럼 a가 3부터인데 왜 2부터..?
//     if(i % j === 0)
//     console.log(i + "\n") 
//   }
// }

///이게 아닌것같다..

// 검색을 통해 알고는 있었지만 이해하지 못해서 적용하지 못했던 에라토스테네스의 체!
// 은비님의 풀이로 접하게 되어 한번 다시 코드를 써본다!

// newArr에 담을 필요 없이 input의 끝에 split을 추가하여 input의 index번호로 할당하기

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");


const [a, b] = [input[0], input[1]]

let arr = new Array(b+1).fill(true); // ture배열을 만든다
  arr[0] = false;
  arr[1] = false;

for(let i = 2; i <= Math.floor(Math.sqrt(b)); i++){
  if(arr[i]){
    let n = 2;

    while((i * n) <= b){
      primeNums[i * n] = false;
      n++;
    }
  }
}  

for(let i = a; a < arr.length;a++) {
  if(arr[a]) {
    resourceLimits.push(a);
  }
}
console.log(result.join("\n"))

// 알듯말듯.. 쓰면서도 이게 맞나 싶다 제대로 이해한게 맞을까?