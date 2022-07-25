// memory : 9896KB
// time : 264ms



/*
    1. input에 2이상 input-1 이하의 숫자를 계속 나눠주는 방식
    3. 1씩 증가하면서 input을 나눠줄 수 divider 변수 2로 초기화
    3. while문으로 input이 1보다 클 동안
        3-1. 만약, input % divider !== 0이라면
            3-1-1. divider += 1
        3-1. 그렇지않다면, input = input / divider
        3-2. divider 출력
*/

let fs = require('fs');
let input = Number(fs.readFileSync('input.txt').toString().split(' '));



let divider = 2;

while (input > 1){
    if (input % divider !== 0){
        // console.log('소인수 아닐 때 input :' + input);
        divider += 1;
    }else{
        input = input / divider;
        console.log(divider);
        // console.log('input :' + input);
        // console.log('divider :' + divider);
    }
}

