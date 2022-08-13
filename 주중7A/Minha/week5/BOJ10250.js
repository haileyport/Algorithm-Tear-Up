// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString().split('\n');

let test = input[0];
for (let i = 1; i <= test; i++) {
  let currTestCase = input[i].split(' ');
  let H = currTestCase[0], W = currTestCase[1], C = currTestCase[2];

  let floor = C % H;
  let room = Math.ceil(C / H);
  if (floor === 0) floor = H;
  if (room < 10) room = '0' + room;

  console.log(`${floor}${String(room).padStart(2, '0')}`);
}