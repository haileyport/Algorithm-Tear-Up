/* 1620번 나는야 포켓몬 마스터 이다솜 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){   
    let n = +input[0].split(" ")[0]; // 도감에 수록된 포켓몬 수
    let m = +input[0].split(" ")[1]; // 맞춰야하는 문제 개수
    let map = new Map();
    let arr = [];
    
    for(let i = 1; i <= n; i++){
        map.set(`${i}`, input[i]);
    }

    
}

solution(input);