// ABC DEF GHI JKL MNO PQRS TUV WXYZ
// UNUCIC는 868242 -> 최소시간 36

// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString();

let dial = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};

let result = 0;
for (let i = 0; i < input.length; i++) {
  for (let x in dial) {
    if (x.includes(input[i])) {
      result += dial[x];
    }
  }
}
console.log(result);