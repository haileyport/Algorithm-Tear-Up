/* 10845번 큐 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
let queue = [];

function solution(input){
    let result = "";

    // 객체에 함수를 담는다.
    const func = {
        push: function push(x){
            queue.push(x);
        },
        pop: function pop(){
            result += `${queue.length > 0 ? queue.shift() : -1}\n`;
        },
        size: function size(){
            result += `${queue.length}\n`;
        },
        empty: function empty(){
            result += `${queue.length === 0 ? 1 : 0}\n`;
        },
        front: function front(){
            result += `${queue.length > 0 ? queue[0] : -1}\n`;
        },
        back: function back(){
            result += `${queue.length > 0 ? queue[queue.length-1] : -1}\n`;
        }
    }

    const n = input.shift();

    for(let i = 0; i < n; i++){
        let reqFunc;
        let x;

        // 요소에 공백이 있는 경우 전달인자가 존재한다는 것이므로 split()으로 함수명과 전달인자를 나눠 변수에 할당한다.
        if(input[i].includes(" ")){
            reqFunc = input[i].split(" ")[0];
            x = input[i].split(" ")[1];
        }else{
            reqFunc = input[i];
        }

        func[reqFunc](x);
    }

    console.log(result.trim());
}

solution(input);