const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(" ");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

const min = Number(input[0]);
const max = Number(input[1]);

for (let i = min; i <= max; i++) {
  let isPrime = (i === 1) ? false : true;

  for(let j = 2; j <= Math.floor(Math.sqrt(i)); j++){
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i)
  }
}
