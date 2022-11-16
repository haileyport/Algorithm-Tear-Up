/* 2908번 상수 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

function solution(input){
   // 두 수를 뒤집어 어떤 것이 큰 수인지 판별한다.
   let nums = input.split(" ");
   let firNum = "";
   let secNum = ""; 

   for(let i = 0; i < nums.length; i++){
    for(let j = nums[i].length - 1; j >= 0; j--){
        if(i === 0){
            firNum += nums[i][j];
        }else{
            secNum += nums[i][j];
        }
    }
   }
   
   console.log(Math.max(+firNum, +secNum));
}   

solution(input);