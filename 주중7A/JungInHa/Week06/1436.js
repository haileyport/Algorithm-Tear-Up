const fs = require('fs');
const N = Number(fs.readFileSync('./input.txt').toString().trim());
// const N = fs.readFileSync('/dev/stdin').toString().trim();

let count = 0;
let num = 665;
let title;

while (count < N) {
  let arr = String(num).split('');

  for (let j = 0; j < arr.length - 1; j++) {
    let threeNum = arr.slice(j, j + 3).join('')
    if (threeNum == '666') {
      title = num; 
      count++;
      break;
    }
  }

  num = Number(num) + 1;
}

console.log(title)