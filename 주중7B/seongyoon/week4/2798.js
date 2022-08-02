let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = input[0].split(' ').map(Number)[0];
let m = input[0].split(' ').map(Number)[1];
let cardNumArr = input[1].split(' ').map(Number);
let max = 0;
for (let i=0; i<n-2; i++) {
    for (let j=i+1; j<n-1; j++) {
        for (let k=j+1; k<n; k++) {
            let sum = cardNumArr[i]+cardNumArr[j]+cardNumArr[k];
            if (sum>max && sum<=m) {
                max=sum;
            }
        }
    }
}
console.log(max);