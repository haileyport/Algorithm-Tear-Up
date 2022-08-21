// 기본수학1 2775  부녀회장이 될테야
// 난이도 : 브론즈1  
// 풀이시간 :  한시간 생각했는데 문제 이해 불가 
// 메모리 :  KB      
// 시간 :   ms      
// 코드길이 :  B




// 수도코드
// 1. 0층은 i호에 i명만큼 살기 때문에 n호만큼 0층을 설정해준다.
// 2. k층 n호에는 k-1층 1호 ~ n호의 인원수만큼 사는데, k-1층 1호 ~ n-1호의 인원수는 k층 n-1호의 인원수와 같다. 
//    따라서 k층 n호의 인원수는 k층 n-1호 + k-1층 n호를 해주면 된다.


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const TESTCASE = input.shift(); //첫 번째 줄에 Test case의 수 T를 TESTCASE로 선언하여 할당

for (let i = 0; i < TESTCASE; i++) { // 테스트케이스만큼 for문으로 순회
  const k = +input.shift(); 
  const n = +input.shift();

  // 각 방당 인원수를 저장할 2차원 배열 선언
  const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  // 0층 (0층의 i호에는 i명이 산다.)
  for (let i = 1; i <= n; i++) {
    house[0][i] = i;
  }
  
    // 1 ~ k층 (k층 n호에는 k-1층 n호 + k층 n-1호만큼 산다.)
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      house[i][j] = house[i - 1][j] + house[i][j - 1];
    }
  }
    // k층 n호의 인원수 출력
  console.log(house[k][n]);
}

