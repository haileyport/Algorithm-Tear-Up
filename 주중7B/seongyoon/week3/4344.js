let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let c = +input[0];

for (let i=1; i<=c; i++) {
    let count = 0;
    let arr = input[i].split(' ');
    let n = arr.map(Number)[0];
    for (let j=1; j<=n; j++) {
        if (arr.map(Number)[j]>(arr.map(Number).reduce((a, b) => a+b)-n)/(arr.map(Number).length-1)) {
            count += 1;
        }
    }
    console.log((count/n*100).toFixed(3)+'%');
}