/* 4344번 평균은 넘겠지 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

function solution(input){ 
    for(let i = 1; i <= input[0]; i++){
        let std = +input[i].split(" ")[0];
        let avg = 0;
        let count = 0;

        for(let j = 1; j <= std; j++){
            avg += +input[i].split(" ")[j];
        }

        avg /= std;

        for(let k = 1; k <= std; k++){
            if(+input[i].split(" ")[k] > avg){
                count++;
            }
        }

        console.log(`${((count / std) * 100).toFixed(3)}%`);
    }

}

solution(input);