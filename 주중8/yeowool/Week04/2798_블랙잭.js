// 부르트포스  2798_블랙잭 
// 난이도 : 브론즈2
// 풀이시간 : 1시간
// 메모리 : 9616 KB      
// 시간 :  184 ms      
// 코드길이 : 555 B

// 공책에 썼던과정을 풀어보자면..
// M과 가장 가까우려면 M-arr[i]의 차이가 가장 적은 arr[i]를 순차적으로 가져오면 된다
// 카드 배열을 arr배열로 담아서 M과의 차액을 낸 후 차액이 낮은 숫자 index번호를 가져와서 arr의 인덱스 번호를 연결해가지구 뽑아온다
// 차액 = [16, 15, 14, 13, 12] 
//  arr = [5, 6, 7, 8, 9]
// 이 두개의 배열의 index번호를 짝을 지어 연결시킨다
//  그래서 제일 적은 차액의 인덱스번호를 가진 숫자카드를 가져와서 더하는데... 
// 문제는 인덱스 번호를 어케 연결시키느냐
// 생각정지..

// 생각을 멈추고 부르트포스를 먼저 찾아보기로한다

// 브루트 포스(brute force)란?
// brute: 무식한, force: 힘   무식한 힘으로 해석할 수 있다.
// 완전탐색 알고리즘. 즉, 가능한 모든 경우의 수를 모두 탐색하면서 요구조건에 충족되는 결과만을 가져온다.
// 이 알고리즘의 강력한 점은 예외 없이 100%의 확률로 정답만을 출력한다.

// 무식한 힘으로 해석한다고 하니 for문을 있는대로 돌려서 경우의 수를 가려내면 어떨까?

// 1. 카드 세장을 더하는 경우의 수를 3단 중첩 for문으로 가려내어 sum에 담는다.
// 2. 루프를 돌면서 gap이 0이상이면서 result에 저장되는 값이 3장의 합인 sum 보다 큰 값을 result에 담는다
// 3. console.log로 for문 밖에서 최대값을 출력한다.


let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
input[0] = input[0].split(" ");

const card = input[1].split(" ");
const [N, M] = [input[0][0], input[0][1]];  // N === 카드 장수  M === 제한숫자
let result = 0;

for(let i = 0; i < N; i++) {
  for(let j = i + 1; j < N; j++) {
    for(let k = j + 1; k < N; k++) {
      let sum = Number(card[i]) + Number(card[j]) + Number(card[k]);
      let gap = M - sum;
      if(result <= sum && gap >= 0) {
        result = sum;
      }
    }
  }
}
console.log(result) 