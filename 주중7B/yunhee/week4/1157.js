/* 1157번 단어 공부 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

let obj = {};

function solution(input){
    // 모든 문자를 대문자로 바꾼다.
    input = input.toUpperCase();
    let maxKey = "";
    let maxVal = 0;
    
    for(let i = 0; i < input.length; i++){
        let char = input[i] 
        
        // 객체 속성에 문자가 없으면 추가하고 값에 1을 더한다.
        if(!(char in obj)){
            obj[char] = 0;
        }
        obj[char]++;

        // 현재 문자 속성의 값이 제일 큰지 체크하고 크다면 바꿔준다.
        if(obj[char] > maxVal){
            maxKey = char;
            maxVal = obj[char];
        }
    }

    // obj의 값만으로 배열을 생성해서 maxVal 값과 같은 요소를 찾아 배열의 길이를 반환한다.
    let maxCount = Object.values(obj).filter((val) => val === maxVal).length;

    // maxCount가 1 이상일 경우 ?를 출력하고 아닐 경우 문자를 출력한다.
    if(maxCount !== 1){
        console.log("?");
    }else{
        console.log(maxKey);
    }
}

solution(input);