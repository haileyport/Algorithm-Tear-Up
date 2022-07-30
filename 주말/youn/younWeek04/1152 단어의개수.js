const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');

let count = 0;
for(let i =0 ; i< input.length; i++){
    if(input[i] !== ""){
        count++
    }
   //아무값도 없는 공백일때도 [""]가 생겨서 위에 ""을 제외해주지 않으면 값이 생기게됨
}
console.log(count)