let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const n = input.shift();
let user = [], result = '';
for (let i = 0; i < n; i++) {
  user.push(input[i].trim());
}
user = [...new Set(user)];
user.sort().sort((a, b) => a.length - b.length);
user.forEach(el => {
  result += `${el}\n`;
});
console.log(result);