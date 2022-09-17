let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//다시풀어보자 변수설정 많이하더라도 차분히 처음부터 풀어보자
let c = parseInt(input[0]);

for (let i = 1; i <= c; i++) {
    let score = input[i].split(' ');
    let n = parseInt(score.shift());
    let count = 0;
    
    let avg = score.reduce((acc, cur) => acc + parseInt(cur), 0);
    
    avg /= n;
    for (let j = 0; j < n; j++) {
        if (score[j] > avg) {
            count++;
        }
    }
    
    let result = ((count / n) * 100).toFixed(3);
    
    console.log(result + "%");
}