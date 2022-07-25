let fs = require('fs');
let input = fs.readFileSync('input.txt').toString();

let dice = input.split(' ');
let first_res = parseInt(dice[0]);
let second_res = parseInt(dice[1]);
let third_res = parseInt(dice[2]);
let reward = 0;


if((first_res === second_res) && (second_res === third_res)){ // 3개 다 같을 경우
    reward = 10000 + first_res * 1000;
}else if((first_res === second_res) && (second_res !== third_res)){ // 3번째만 다를 경우
    reward = 1000 + first_res * 100;
}else if((first_res === third_res) && (third_res !== second_res)){ // 2번째만 다를 경우
    reward = 1000 + first_res * 100;
}else if((second_res === third_res) && (third_res !== first_res)){ // 1번째만 다를 경우
    reward = 1000 + second_res * 100;
}else{
    reward = Math.max(first_res, second_res, third_res) * 100 // 다 다를 경우
}

console.log(reward);
