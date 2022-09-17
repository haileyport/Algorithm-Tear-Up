// memory : 9348KB
// time : 124ms

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

/*
    # 실패방법

    check.1 : input의 첫번째 행 (input[0]) 은 단어의 개수이다. -> 각 단어를 순회할 횟수
    check.2 : 그룹단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우를 말한다.
    

    0. 그룹단어를 세어줄 count변수 선언 및 0으로 초기화
    0. 각 문자의 갯수를 세주는 함수 getCount 선언
    1. for문으로 i는 1부터 input[0]보다 작을 때까지 순회하면서 (단어 순회)
        1-1. stringCount에 getCount(input[i]) (이제부터 stringCount에 각 알파벳 별 출현횟수가 객체로 저장)

        1-2. for문으로 j는 0부터 input[i].length만큼 순회하면서 (단어의 알파벳 순회)
            1-2-1. 만약, stringCount[input[i][j]] === 1 이라면
                1-2-1-1. isGroup = true;
            1-2-2. 그렇지않다면,
                1-2-2-1. 만약 

*/

/*

    # 성공방법

    0. 나왔던 문자를 저장해주는 배열 temp 빈배열로 초기화
    0. 그룹단어를 세어줄 count 0으로 초기화
    1. for문으로 i는 1부터 input[0]까지 순회하면서 (단어 순회)
        1-0. 그룹단어인지 여부를 boolean값으로 받을 result = false로 초기화

        1-1. for문으로 j는 0부터 input[i].length보다 작을때까지 순회하면서 (알파벳 순회)
            1-1-1. 만약, input[i][j]가 temp에 없으면(includes) 
                1-1-1-1. temp = input[i][j]
            1-1-2. 그렇지않고 만약, input[i][j]가 temp에 있고 input[i][j-1] === input[i][j]이라면,
                1-1-2-1. result = true;
            1-1-3. 그렇지않고 만약, input[i][j]가 temp에 있고 input[i][j-1] !== input[i][j]라면,
                1-1-3-1. result = false; 하고 break;
            
        1-2. 만약 result === true면 count+=1

    2. console.log(count)

*/      


// 0. 나왔던 문자를 저장해주는 배열 temp 빈배열로 초기화
let temp = [];
// 0. 그룹단어를 세어줄 count 0으로 초기화
let count = 0;


// 1. for문으로 i는 1부터 input[0]까지 순회하면서 (단어 순회)
// 1-0. 그룹단어인지 여부를 boolean값으로 받을 result = true 초기화
for(let i = 1; i <= input[0]; i++){
    let result = true;

    // 1-1. for문으로 j는 0부터 input[i].length보다 작을때까지 순회하면서 (알파벳 순회)
    for(let j = 0; j < input[i].length; j++){ 
        // 1-1-1. 만약, input[i][j]가 temp에 없으면(includes) 
        if(temp.includes(input[i][j]) === false){ 
            temp.push(input[i][j]);
            // console.log(1, temp, input[i][j]);
        }
        // 1-1-2. 그렇지않고 만약, input[i][j]가 temp에 있고 input[i][j-1] === input[i][j]이라면, (연속된 문자라는 것을 의미)
        else if((temp.includes(input[i][j]) === true) && (input[i][j] === input[i][j-1])){ 
            result = true;
            // console.log(2, input[i][j]);

        }
        // 1-1-3. 그렇지않고 만약, input[i][j]가 temp에 있고 input[i][j-1] !== input[i][j]라면, (연속되지 않은 문자가 출현했다는 것을 의미)
        else if ((temp.includes(input[i][j]) === true) && (input[i][j] !== input[i][j-1])){
            result = false;
            // console.log(3, 'break', input[i][j]);
            break;
        } 
    }
    // console.log(result);

    // 1-2. 만약 result === true면 count+=1
    if(result){
        count += 1;
    }
    
    // temp 초기화
    temp = [];
}

console.log(count);
