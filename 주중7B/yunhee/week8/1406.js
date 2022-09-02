/* 1406번 에디터 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){
    let str = input.shift().split(""); // 편집기에 입력된 문자열
    let temp = []; // str에서 pop()된 요소들을 담을 배열
    let m = input.shift(); // 명령어의 개수

    for(let i = 0; i < m; i++){
        if(input[i] === "L"){
            // 커서가 문장의 맨 앞이 아닌 경우 왼쪽으로 이동 => 배열의 마지막 요소를 빼줌
            if(str.length !== 0){
                let pop = str.pop();
                temp.push(pop);
            }
        }else if(input[i] === "D"){
             // 커서가 문장의 맨 뒤가 아닌 경우 오른쪽으로 이동 => 뺐던 요소들을 추가해줌
            if(temp.length !== 0) {
                let pop = temp.pop();
                str.push(pop);
            }
        }else if(input[i] === "B"){
            // 커서 왼쪽의 문자열 삭제 => 삭제이므로 temp에 추가하지 않음
            if(str.length !== 0){
                str.pop();
            }
        }else{
            // 커서 왼쪽에 문자 추가 => 추가이므로 기존 배열에 push
            let x = input[i].split(" ")[1];
            str.push(x)
        }
    }

    let cnt = temp.length;
    
    // 모든 명령어를 수행한 후에 temp에 남은 문자들을 push해준다.
    for(let j = 0; j < cnt; j++){
        str.push(temp.pop());
    } 

    console.log(str.join(""));
}

solution(input);