// 재귀적인 패턴으로 별을 찍어 보자. N이 3의 거듭제곱(3, 9, 27, ...)이라고 할 때, 크기 N의 패턴은 N×N 정사각형 모양이다.
// N이 3보다 클 경우, 크기 N의 패턴은 공백으로 채워진 가운데의 (N/3)×(N/3) 정사각형을 크기 N/3의 패턴으로 둘러싼 형태이다. 예를 들어 크기 27의 패턴은 예제 출력 1과 같다.
// 첫째 줄에 N이 주어진다. N은 3의 거듭제곱이다. 즉 어떤 정수 k에 대해 N=3k이며, 이때 1 ≤ k < 8이다.
// 첫째 줄부터 N번째 줄까지 별을 출력한다.

const fs = require('fs');
const { listeners } = require('process');
const input = fs.readFileSync('./input.txt').toString().trim();
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = parseInt(input);
let result = [];

function star(i, j, num) {
  if (i % 3 == 1 && j % 3 == 1) {
    // (1,1), (1,4), (1,7)...
    result.push(" ");
  } else {
    if (num == 1) {
      result.push("*")
    } else { 
      // (3,3), (3,4), (9,9), (27,27) ... -> (1,1)
      star(parseInt(i/3), parseInt(j/3), parseInt(num/3),)
    }
  }
}

function printStars(num) {
  for (let i = 0; i < num; i ++) { 
    for (let j = 0; j < num; j ++) { 
      star(i, j, num) 
    }
    result.push("\n");
  }
}

printStars(N);
console.log(result.join(""))