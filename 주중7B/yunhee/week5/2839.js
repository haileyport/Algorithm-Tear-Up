/* 2839번 설탕 배달 */

const fs = require("fs");
const input = +fs.readFileSync("input.txt").toString().trim();

function solution(input){
   // 3kg, 5kg => 최대한 적은 봉지 개수
   let count = 0;

   // input에 -3이나 -5를 했을 때 0보다 크다면 계속 반복한다.
    while(input - 3 >= 0 || input - 5 >= 0){
        // 5의 배수인지 체크하고 배수라면 5를 빼주고 아니라면 3을 빼준다.
        if(input % 5 === 0){
            input -= 5;
        }else{  
            input -= 3;
        }
        count++;
    }

    // 5와 3으로 뺐을 때 딱 N킬로그램이 나오지 않으면 -1
    console.log(input === 0 ? count : -1);
}

solution(input);