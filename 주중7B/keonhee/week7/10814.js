const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const numOfPeople = +input[0];
const arr = input.slice(1).map((el) => el.split(' '));

function solution(arr) {
  const hashTable = {};
  let result = '';

  for (let detail of arr) {
    if (!hashTable[detail[1]]) {
      hashTable[detail[1]] = Number(detail[0]);
    }
  }
  // hashTable 에 이름 : 나이 로 저장
  // { Junkyu: 21, Dohyun: 21, Sunyoung: 20 }

  const sortedArr = Object.entries(hashTable).sort((a, b) => a[1] - b[1]);

  sortedArr.map((el) => (result += `${el[1]} ${el[0]}\n`));

  console.log(result.slice(0, result.length - 1));
}

solution(arr);
