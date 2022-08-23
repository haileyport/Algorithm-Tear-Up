let fs = require('fs');
const { format } = require('path');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('test.txt').toString( ).trim().split(" ");

// 백준 1929번, 소수 구하기
// 실버 3/ 244452KB/ 216ms

// M 이상 N이하의 소수를 모두 출력
// M 이상 N이하의 소수가 하나 이상 있는 입력이 주어짐 
// 한줄에 하나씩, 증가하는 순서대로 소수 출력 => 오름차순 

// 1. input을 split을 이용해 빈칸으로 나누어 M과 N을 각각 할당해준다
// 2. M부터 N까지 도는 반복문 생성(while)
// 3. 2부터 N까지의 범위를 가지며 도는 이중 반복문 생성(2번째 while)
// 4. M을 i로 나누었을 때 나머지가 0이고, 몫이 1이라면 출력 후 해당 반복문 종료, M을 1씩 증감해준다. 
// 5. M을 i로 나누었을 때 나머지가 0인데, 몫이 1이 아니라면 소수가 아니므로 반복문 종료 (break) 후 M을 1씩 증감한다. 
// 6. M을 i로 나누었을 때 나머지가 0이 아니라면 i를 1씩 증감한다.

let M = parseInt(input[0]);
let N = parseInt(input[1]);

// 시간  초과
// while(M <= N){
//   let i = 2;
//   while (i <= N){
//     if(M % i === 0 && M / i === 1){
//       console.log(i);
//       break;
//     }else if(M % i === 0 && M / i !== 1 ){
//       break;
//     }else{
//       i++;
//     }
//   }
//   M++;
// }

// 시간초과 2 
// let i = 2;

// while(M <= N){
//   if(M % i === 0 && M / i === 1){ //소수라면?
//     console.log(i);
//     M++;
//     i = 2; // 초기화
//   }else if(M % i === 0 && M / i !== 1 ){ //소수가 아니라면?
//     M++;
//     i = 2;
//   }else{ // i로 나누어지지 않는다면?(나머지가 0이 아니라면?)
//     i++; 
//   }
// }

// 에라토스테네스의 체? 라는 걸 사용해보자..

// 1. N+1 만큼 true로 채워진 배열 만들기 => primeNums[]
// 2. 2부터 N의 제곱근까지 도는 반복문 생성(제곱근은 소수점 버리도록!)
// 3. primeNums[i]가 true인 조건을 만족하는 조건식 생성, 
// 4. 제곱근의 약수들의 배수를 구하기위해 곱해줄 변수 생성(m) 및 2로 할당
// 5. i * m이 M보다 작거나 같을 때 만족하는 조건을 가지는 반복문 생성 (while문)
// 6. 제곱근의 약수들의 배수인(소수가 아닌) primeNums[i * m] 을 false로 재할당!
// 7. M이상 N이하의 반복문을 이용해 요소의 인덱스를 하나씩 출력

let primeNums = new Array(N+1).fill(true);
  primeNums[0] = false;
  primeNums[1] = false;
  

for(let i = 2; i <= Math.floor(Math.sqrt(N)); i++){
  if(primeNums[i]){
    let m = 2;

    while((i * m) <= N){
      primeNums[i * m] = false;
      m++;
    }
  }
}

let result = [];
for( M; M < primeNums.length; M++){
  if(primeNums[M]){
    // 3932ms
    // console.log(M); -> 시간이 엄청 오래걸림.. 왜?
    // 디버깅용으로 사용되는 함수라 속도 저하 발생
    // 출력할 데이터를 매번 변수에 담아서 하나하나 출력하기 때문인듯; 짜증;
    result.push(M);
  }
}

console.log(result.join('\n'));