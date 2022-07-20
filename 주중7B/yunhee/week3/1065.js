/* 1065번 한수 */

// 각 자리가 등차수열을 이룬다면 그 수를 한수라고 한다.
// 등차수열은 연속된 두개의 수의 차이가 일정한 수열을 말한다.
// n이 주어졌을 때 n보다 크거나 같고, n보다 작거나 같은 한수의 개수를 출력해라

const fs = require("fs");
const input = +fs.readFileSync("input.txt").toString();

function solution(input){ 
    // 한 수인지 구별할 수 있는 배열을 만든다.
    const arr = new Array(input + 1).fill(true);    

    // 반복문으로 한 수인지 확인한다
    for(let i = 0; i < input + 1; i++){
        const num = String(i);

        // 100 미만의 수는 한수이기 때문에 다음으로 넘어간다.
        if(num.length < 3){
            continue;
        }else{
            // 각 자리 수의  차이를 구한다.
            const d = num[1] - num[0];
            
            // 반복문으로 다음 자리 수와 현재 자리 수를 뺀 값이 위에서 구한 차이와 동일한지 체크한다.
            // 동일하지 않다면 한 수가 아니므로 배열의 i 인덱스에 false를 할당하고 break로 반복문을 빠져나간다.
            for(let j = 1; j < num.length - 1; j++){
                if(d !== num[j + 1] - num[j]){
                    arr[i] = false;
                    break;
                }
            }
        }
    }

    // filter를 사용해 true인 것을 걸러낸 후 길이를 출력한다.
    // 0도 true이기 때문에 -1을 해준다.
    console.log(arr.filter((n) => n).length - 1);
}

solution(input);