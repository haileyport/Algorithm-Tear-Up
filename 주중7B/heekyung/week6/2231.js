let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const max = Number(input)
for(let i = 1; i < max; i ++) {
 
 const value = String(i).split('').map(v=>+v).reduce((acc, cur) => acc + cur , i)
}
// result = Number(input)+Number(input[0])+Number(input[1])+Number(input[2]);
console.log(result)