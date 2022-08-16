/* 1181번 단어 정렬 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){   
    // 길이가 짧은 것부터, 길이가 같으면 사전 순으로 정렬
    let n = input.shift();

    // 중복 요소 제거
    let set = new Set(input);

    let arr = [...set].sort((a, b) => {
        if(a.length - b.length > 0){
            return 1;
        }else if(a.length - b.length === 0){
            if(a > b){
                return 1;
            }else{
                return -1;
            }
        }else{
            return -1;
        }
    }).join("\n")

    console.log(arr);
}

solution(input);