const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(n => Number(n));

// 2부터 10000까지의 숫자 중 소수 구하기
const n = 2;
const m = 10000;
// 에라토스테네스의 체 사용
let prime = [];
for (let i = n; i <= m; i++) {
  prime[i] = i;
}

//console.log(prime); [empty, empty, 2, 3, 4, 5, 6, ... , 10000]

for (let i = 2; i <= m; i++) {
  if (prime[i] === 0) continue; // 아래 for문에서 0으로 바뀐 i의 배수들을 건너뛰게 해줘서 속도 향상시켜주는 부분.
  for (let j = i + i; j <= m; j += i) {
    prime[j] = 0; //i의 배수들을 prime배열에서 모두 0으로 바꿔줌
  }
}
prime = prime.filter(n => n !== 0); // 0을 다 빼고 소수만 남게 함

//console.log(prime);

// 테스트케이스 하나씩 반복
for (let i = 0; i < input.length; i++) {
    // 골드바흐 파티션 구하기
    const num = Number(input[i]);
    // 가능한 골드바흐 파티션을 저장할 배열
    let answer = [];
    // 주어진 수의 절반보다 작은 소수만 탐색하면 됨  
    //ex) 10의 경우 num/2+1을 안하고 전체를 구하면 [3,7] [5,5] [7,3] 이 골드바흐 파티션으로 나옴. 여기서 [7,3]을 제외시키기위함.
    for (let j = 0; prime[j] < num / 2 + 1; j++) {
      // (주어진 수 - 소수)가 소수인지
      const index = prime.indexOf(num - prime[j]);
      // 소수라면
      if (index !== -1) {
        // 골드바흐 파티션이므로 배열에 저장
        answer.push([prime[j], prime[index]]);
      }
    }
    // 골드바흐 파티션이 존재했다면
    if (answer.length !== 0) {
      // 가장 마지막 파티션을 가져옴 (두 소수의 차이가 가장 작음) 
      //ex) 10의 경우 [3,7] [5,5]
      const a = answer.pop();
      // 출력
      console.log(`${a[0]} ${a[1]}`);
    }
  }