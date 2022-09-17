// 1차원배열  8958_OX퀴즈 성공
// 난이도 : 브론즈2
// 풀이시간 : 1시간
// 메모리 :9580 KB      
// 시간 :  140 ms      
// 코드길이 : 354 B

// 1. for문으로 input[0]만큼 순회한다 이때 index 0은 요쇼의 수량이니까 제외
// 2. 첫번째 for문 안에 count와 sum을 선언한다
// 3. 안에 중첩for문으로 input배열의 요소가 가진 글자를 하나씩 O인지 if문으로 확인한다
// 4. 만약 0라면 count에 ++ 아니라면 0을 준다
// 5. if 문 밖에서 위에서 모은 count를 더해준다
// 6. sum을 출력

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

for (let i = 1; i <= input[0]; i++) {
    let count = 0;
    let sum = 0;
  
    for(let j = 0; j < input[i].length; j++) {
      if (input[i][j] === 'O') {
        count++;
      } else {
        count = 0;
      }
      sum += count;
    }
    console.log(sum);
  }