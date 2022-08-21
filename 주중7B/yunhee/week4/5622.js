/* 5622번 다이얼 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

let nums = "";

function solution(input){
   // 입력된 문자를 숫자로 바꾼다. => 아스키코드 활용  
   for(let i = 0; i < input.length; i++){  
        let j = 65;
        let num = 2; // 현재 다이얼 번호

        // 아스키코드의 A-Z까지 반복한다.
        while(j <= 90){
            // 각 문자를 아스키코드의 숫자로 변경해준다.
            let char = input[i].charCodeAt(); 

            if(j === 80 || j === 87){
                if(char >= j && char <= j + 3){ 
                    nums += num;
                    break;
                }

                j += 4;
            }else{
                // A~C까지 한 숫자이므로 이 범위에 해당하면 nums에 num을 넣는다.
                if(char >= j && char <= j + 2){ 
                    nums += num;
                    break;
                }

                j += 3;
            }
            // 반복할 때마다 다이얼에 1을 더해준다.
            num++;
        }     
    }

   // 각 숫자로 이동할 때 걸리는 시간을 구한다.
   let time = 0;

   for(let i = 0; i < nums.length; i++){
    // 2초를 더하고 각 다이얼마다 1초씩 더 더한다.
    time += 2;
    for(let j = 2; j <= nums[i]; j++){
        time++;
    }
   }
   
   console.log(time);
}   

solution(input);