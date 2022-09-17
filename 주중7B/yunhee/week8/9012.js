/* 9012번 괄호 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){
    const t = input.shift();
    let result = "";

    input.forEach(e => {
        // 요소에 쌍괄호가 존재하지 않을 때까지 replaceAll()로 쌍괄호를 치환하는 작업을 반복한다.
        while(e.includes("()")){
            e = e.replaceAll("()", "");
        }
        // 요소의 길이가 0보다 크면 쌍이 아닌 괄호가 존재한다는 것이므로 NO를 담고 아니라면 YES를 담는다.
        let answer = e.length > 0 ? "NO" : "YES"
        result += `${answer}\n`; 
    });

    console.log(result);
}

solution(input);