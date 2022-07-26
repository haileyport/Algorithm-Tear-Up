const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0];

function solution(str) {
  // 시계방향으로 다이얼을 돌린다.
  // 숫자 하나를 누르면 다이얼은 초기화
  // 다음숫자를 누르기 위해서는 처음숫자에서 다이얼을 다시 돌려야함
  // 한칸 옆에 있는 숫자를 걸기 위해선 1초가 걸림
  // 각 알파벳에 해당하는 숫자 구하고 count 늘리기

  // String 타입 배열로 변경
  str = str.split('');

  // 알파벳으로 이루어진 객체 생성
  const dialNumebrs = {
    0: 'operator',
    1: [],
    2: ['A', 'B', 'C'],
    3: ['D', 'E', 'F'],
    4: ['G', 'H', 'I'],
    5: ['J', 'K', 'L'],
    6: ['M', 'N', 'O'],
    7: ['P', 'Q', 'R', 'S'],
    8: ['T', 'U', 'V'],
    9: ['W', 'X', 'Y', 'Z'],
  };

  // 배열내의 알파벳을 숫자로 변환시킨 후 numbers 에 push

  const numbers = [];

  str.map((cha) => {
    // dialNumbers 객체 순환
    for (let key in dialNumebrs) {
      const arr = dialNumebrs[key];
      // dialNumbers 의 values 배열에 포함하고 있으면 number 타입의 key 값을 push
      if (arr.includes(cha)) {
        numbers.push(Number(key));
      }
    }
  });

  // count = 기본 다이얼 1초 * 문자의 개수
  const count = numbers.length;

  // 배열의 요소들은 이미 기본 다이얼을 제외한 다이얼 숫자까지 걸리는수
  // + default + 배열의 길이
  const sum = numbers.reduce((a, b) => a + b) + count;

  console.log(sum);
}

solution(input);
