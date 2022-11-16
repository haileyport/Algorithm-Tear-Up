let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const n = input.shift();
let user = [];
for (let i = 0; i < n; i++) {
  user[i] = input[i].trim().split(' ');
  user[i][0] = Number(user[i][0]);
}
// console.log(user);
user.sort((a, b) => a[0] - b[0]);
// console.log(user);
user.map(el => console.log(`${el[0]} ${el[1]}`));
