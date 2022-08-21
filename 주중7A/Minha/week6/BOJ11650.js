let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const n = input.shift();
let user = [], result = '';
for (let i = 0; i < n; i++) {
  user[i] = input[i].trim().split(' ');
  user[i][0] = Number(user[i][0]);
  user[i][1] = Number(user[i][1]);
}
user.sort((a, b) => a[1] - b[1]);
user.sort((a, b) => a[0] - b[0]);
user.forEach(el => {
  result += `${el[0]} ${el[1]}\n`;
});
console.log(result);
