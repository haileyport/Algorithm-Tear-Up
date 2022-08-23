let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const t = input.shift();
let result = '';
input = input.map(i => Number(i.trim()));
input = input.sort((a, b) => a - b);
input.forEach(el => {
  result += `${el}\n`;
});
console.log(result.trimEnd());
