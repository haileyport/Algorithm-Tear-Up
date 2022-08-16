/* 11650번 좌표 정렬하기 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){   
    // 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬
    let n = input.shift();
    
    let result = input.sort((a, b) => {
        if(a.split(" ")[0] - b.split(" ")[0] > 0){
            return 1;
        }else if(a.split(" ")[0] - b.split(" ")[0] < 0){
            return -1;
        }else{
            if(a.split(" ")[1] - b.split(" ")[1] > 0){
                return 1;
            }else{
                return -1;
            }
        }
    }).join("\n");

    console.log(result);
}

solution(input);