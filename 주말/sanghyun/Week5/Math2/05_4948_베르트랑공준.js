let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./05_4948.txt').toString().trim().split('\n');

function isPrime(num) {
  if(num === 1){
    return false;
  }
  if(num === 2) {
    return true;
  }
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      return false; 
    }
  }
  return true; 
}
// 제일 높은 값의 소수를 구하고 필터링
function solution(income) {
  let result = ''; //결과 배열 생성
  let n = input.map(el => Number(el));

  for (let i = 0 ; i < n.length - 1; i++){
    // console.log(n[i]) // 1, 10, 13 출력 -> 마지막 0은 출력 안됨
    let start = n[i] + 1; //시작 숫자 -> 1, 10 .....
    let end = n[i]*2; //마지막 숫자 -> 2, 20 ....
    // console.log('--------------------------')
    let count = 0 // 범위 안에 소수가 몇개인지 판별
    // console.log(`시작 ${start} 그리고 끝 ${end}`)

    for (start; start <= end; start++){
      let sosoo = isPrime(start);
      // console.log(`판별할 소수: ${start} & 판별결과: ${sosoo}`)
      if(sosoo){
        count++
      }
    }
    result += count + '\n';
  }
  console.log(result);
}

solution(input)