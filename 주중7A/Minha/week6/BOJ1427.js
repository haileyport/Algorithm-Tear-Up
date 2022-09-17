let input = require('fs').readFileSync('input.txt').toString().trim().split('\n')[0];
let result = '';
input = input.trim().split('');
input = input.map(el => Number(el));
input.sort((a, b) => b - a)
  .forEach(el => {
    result += `${el}`;
  });
console.log(result);
