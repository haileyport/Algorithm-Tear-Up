const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const croatian = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

for (let i = 0; i < croatian.length; i++) {
  input = input.replaceAll(croatian[i], 'C'); // 하나의 문자열만 차지하게 바꿈
}

console.log(input.length);
