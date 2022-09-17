let input = require('fs').readFileSync('input.txt').toString().trim().split('\n')[0];
let sixs = '666', num = 665;
input = Number(input);
while (input > 0) {
  num++;
  if (num.toString().includes(sixs)) {
    input--;
  }
}

console.log(num);