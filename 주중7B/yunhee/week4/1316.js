/* 1316번 그룹 단어 체커 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){   
    let count = 0;

    for(let i = 1; i <= input[0]; i++){
        let obj = {};
        let str = input[i];

        for(let j = 0; j < str.length; j++){
            // obj에 속성이 존재하지 않을 경우 추가하고 값을 0으로 할당한다.
            if(!(str[j] in obj)){
                obj[str[j]] = 0;
            }else{
            // obj에 속성이 존재하는 경우 속성이 이전 값과 동일한지 확인하고 동일하지 않으면 반복문을 탈출한다.    
                if(str[j] !== str[j-1]){
                    break;
                }
            }
            
            // 값에 1을 더한다.
            obj[str[j]]++;
        }

        // obj의 값을 모아 배열을 생성해서 배열의 요소를 다 더한다.
        let objVal = Object.values(obj).reduce((acc, cur) => acc + cur);

        // 배열의 요소를 다 더한 값과 문자의 길이가 같을 경우 그룹 단어이므로 count에 1을 더한다.
        /* 만약 그룹 단어가 아니라면 연속되지 않은 문자열이 있을 것이고 있다면 위에서 break를 통해 탈출하느라 값에 1을 더하지 못했을 것이기 때문에 문자의 길이보다 값이 적을 수 밖에 없다. */
        if(objVal === str.length){
            count++;
        } 
    }

    console.log(count);
    
}

solution(input);