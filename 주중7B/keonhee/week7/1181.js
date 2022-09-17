const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const numOfPeople = +input[0];
const arr = input.slice(1);

function solution(arr) {
  let result = '';
  arr = [...new Set(arr)]
    .sort((a, b) => {
      if (a.length === b.length) {
        return (a > b) - (a < b);
      } else {
        return a.length - b.length;
      }
    })
    .map((el) => console.log(el));
}

solution(arr);
