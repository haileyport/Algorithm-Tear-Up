let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');

let startHours = input[0].split(' ').map(Number)
let cookingTime = Number(input[1])


startHours[0] = (startHours[0] + Math.floor((startHours[1] + cookingTime)/60))%24 //24로 안나눠서 처음에 틀림..ㅎㅎ 
startHours[1] = (startHours[1] + cookingTime)%60


console.log(`${startHours[0]} ${startHours[1]}`)

