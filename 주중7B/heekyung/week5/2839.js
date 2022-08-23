const input = require("fs").readFileSync("/dev/stdin").toString().trim()

let num = Number(input)
let five = 0;
let three = 0;

while(true){
    if(num % 5 === 0){
        five = num / 5;
        console.log(five + three);
        break;
    }
    if(num < 0){
        console.log(-1);
        break;
    }
    num = num - 3;
    three++;
}
