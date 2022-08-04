const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');

let ca = input;
let num1 = ca[0].split('').reverse().join("");//734 -> 7,3,4 ->4,3,7 ->437
let num2 = ca[1].split('').reverse().join("");

if(num1 > num2){
    console.log(num1);
}else{
    console.log(num2);
}