const input = require("fs").readFileSync("../ex.txt").toString().trim();

// 등차수열은 연속하는 두 항의 차이가 모두 일정한 수열을 뜻한다.
// 이때 두 항의 차이는 이 수열의 모든 연속하는 두 항들에 대해서 공통적으로 나타나는 차이므로, 공차라고 한다.

function solution(num) {
  const numsArr = [];

  let count = 0;

  for (let i = 1; i <= num; i++) {
    const numArr = String(i).split("");

    for (let j = 0; j < numArr.length - 1; j++) {
      // 한수가 아니면
      if (
        Number(numArr[j + 1]) - Number(numArr[j]) !==
        Number(numArr[1]) - Number(numArr[0])
      ) {
        numsArr[i] = 0;
      }
    }
  }

  for (let i = 1; i <= num; i++) {
    // 한수이면
    if (numsArr[i] !== 0) {
      count++;
    }
  }

  console.log(count);
}

solution(input);
