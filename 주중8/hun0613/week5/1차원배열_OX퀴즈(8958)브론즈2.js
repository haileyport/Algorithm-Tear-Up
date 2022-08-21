// memory : 9584KB
// time : 152ms
// 풀이시간 : 28분


let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

// check.1 : input의 0번째 값은 문제 수
// check.2 : OO 라면 1점 2점 (연속된 정답이면 문제의 점수는 1씩 증가)

// 1. for문으로 i는 1부터 input[0]까지 순회하면서
    // 1-1. for문으로 j는 0부터 input[i].length보다 작을때까지
        // 1-1-1. 만약 input[i][j]가 'O'라면
            // 1-1-1-1. score += 1;
        // 1-1-2. 만약 input[i][j]가 'O'이면서 input[i][j-1]이 'O'라면
                // 1-1-2-1. count += 1;
        // 1-1-3. 그렇지않다면
            // 1-1-3-1. score = score + count
            // 1-1-3-2. count = 0;


for (let i = 1; i <= parseInt(input[0]); i++){
    let score = 0;
    let count = 1;

    // console.log(input[i]);
    for (let j = 0; j < input[i].length; j++){
        if (input[i][j] === 'O' && input[i][j-1] !== 'O'){
            score += 1;
        }

        if (input[i][j] === 'O' && input[i][j-1] === 'O'){
            count += 1;
            score = score + count;
            // console.log(count, score)
        }else{
            count = 1;
            // console.log(count, score)
        }
    }
    
    console.log(score);

}