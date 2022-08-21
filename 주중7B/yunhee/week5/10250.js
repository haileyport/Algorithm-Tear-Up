/* 10250번 ACM호텔 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){
    for(let i = 1; i <= input[0]; i++){
        let result = "";
        let count = 0;
        
        let h = +input[i].split(" ")[0]; // 호텔의 층 수 
        let w = +input[i].split(" ")[1];; // 각 층의 방 수
        let n = +input[i].split(" ")[2];; // 몇 번째 손님인지
        
        if(h > n){
            // 호텔의 층이 n번째 고객보다 높으면 n번 층을 저장
            result += `${n}`;
        }else{
            // n번째 고객이 호텔의 층보다 크면 n - h로 호텔 층 안으로 들어오도록 제해줌
            while(n - h > 0){
                n -= h;
                count++;
            }
            
            result = n === 0 ? result + `${h}` : result + `${n}`;
        }

        result = String(count + 1).length === 1 ? result + `0${count + 1}` : result + `${count + 1}`;

        console.log(+result);
    }
}

solution(input);