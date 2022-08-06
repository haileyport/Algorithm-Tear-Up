const fs = require('fs');
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');

const current = input[0].split(' ');

let h = parseInt(current[0]);
let m = parseInt(current[1]);
let cookingTime = parseInt(input[1]);

m += cookingTime;

while (m >= 60) {
	m -= 60;
  h += 1;
} 

while (h > 23) {
  h = h - 24;
}

console.log(h, m);
