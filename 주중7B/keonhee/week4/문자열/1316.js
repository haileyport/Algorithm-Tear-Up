const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let length = +input[0];
let array = input.slice(1);

function solution(amount, array) {
  // 그룹단어란 단어에 존재하는 모든 문자에 대해 각 문자가 연속해서 나타나는 경우만 말함.
  // ccazzzzbb 는 c,a,z,b 가 모두 연속해서 나타남.
  // kin 은 k,i,n 이 연속해서 나타난다.
  // 하지만, aabbbccb 는 b가 떨어져서 나타나기 때문에 그룹단어가 아님
  // 그룹 단어의 개수를 출력하라.

  // 각 단어의 그룹단어 개수를 알수 있는 배열 생성.
  // 단어가 그룹단어이기만 하면된다.

  const groupCount = new Array(amount).fill(false);

  array.map((word, i) => {
    const stack = [];

    for (let i = 0; i < word.length; i++) {
      // stack 배열에 이미 포함하고 있거나, 연속되는 문자열일때만 stack 에 추가 시켜준다.
      if (!stack.includes(word[i]) || word[i - 1] === word[i]) stack.push(word[i]);
    }

    // word 와 stack.join('') 의 문자열이 같이 않으면 그룹문자 이므로 true
    if (stack.join('') === word) {
      groupCount[i] = true;
    }
  });

  // 밸류가 true인 개수 출력
  console.log(groupCount.filter((boolean) => boolean === true).length);
}

solution(length, array);
