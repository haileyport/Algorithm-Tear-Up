// 1. 맨 밑 원반을 목표(3번째)장대(to)로 옮기기 위해서는
// 2. 맨 밑 제외 나머지 원반들을 나머지(2번째)장대(other)로 옮겨야 한다.
// 3. 맨 밑 원반을 옮기고, 나머지 원반들을 목적지(3번째)장대(to)로 옮긴다.
// 이 과정을 반복해야 하기 때문에 재귀함수

const input = Number(require("fs").readFileSync("../ex.txt").toString().trim()); // 원판 개수

let count = ""; // 옮긴 횟수
let result = ""; // 수행 과정

function hanoi(num, from, other, to) {
  // 옮길 원판이 없으면 return
  if (num === 0) {
    return;
  }

  // 맨 밑 제외 나머지 원반들을 나머지(2번째)장대(other)로 옮긴다.
  hanoi(num - 1, from, to, other);

  result += `${from} ${to}\n`;
  count++;

  // 나머지 원반들을 목적지(3번째)장대(to)로 옮긴다.
  hanoi(num - 1, other, from, to);
}

hanoi(input, "1", "2", "3");

console.log(count);
console.log(result);

// 참고 https://nyang-in.tistory.com/210
