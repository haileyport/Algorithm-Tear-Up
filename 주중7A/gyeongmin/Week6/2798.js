let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let M = input[0].split(' ')[0]
let N = input[0].split(' ')[1]
//console.log(M) //5
//console.log(N) //21

let card = input[1].split(' ')
//console.log(card) // ['5', '6', '7', '8', '9']

let max = 0;
//3개의 카드를 고르기 때문에 첫 번째 카드는 n-2까지 순회
for(let i = 0; i < M - 2; i++) {
    //두 번째 카드는 첫 번째 다음부터 n-1까지 순회
    for(let j= i + 1; j < M-1; j++) {
        //세 번째 카드는 두 번째 카드 다음부터 n까지 순회
        for(let k = j + 1; k < M; k++) {
            let sum = Number(card[i])+Number(card[j])+Number(card[k]);
            if(sum <= N) {
                max = Math.max(max, sum);
            }
        }
    }
}
console.log(max)
