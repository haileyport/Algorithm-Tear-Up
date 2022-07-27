let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0];
let rankArr = [];

for(let i=1; i<=n; i++){
    let count = 1;
    for(let j=1; j<=n; j++){
        if (i!==j){
            if (+input[i].split(' ')[0]<+input[j].split(' ')[0] &&
                +input[i].split(' ')[1]<+input[j].split(' ')[1]) {
                count++;
            }
        }
    }
    rankArr.push(count);
}
console.log(rankArr.join(' '));