let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let num = Number(input);
let count = 0;

while (true) {
    num = (num%10)*10 + (Math.floor(num/10)+num%10)%10;
    count++;
    if (num === Number(input)) {
        break;
    }
}
console.log(count);