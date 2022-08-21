/*
통과 여부 : 통과!
시간 복잡도 : 124ms
공간 복잡도 : 9512 KB

input :
    1) 단어 : 소문자, -, =으로만 이뤄짐

output :
1) 몇 개의 크로아티아 알파벳으로 이뤄져 있는지

* 의사 코드
    1. 입력 받기
    2. 크로아티아 알파벳 6개를 어떻게 구분하지
        =이랑 - indexof로 역조회?

* 발표 듣기 : 아니? replace도 있고 splice도 있는데 왜 난 생각을 못했지!?!?!?

*/

//1. 입력 받기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('');

// console.log(input);

let pos = 0;
let equalSign = '=';
let hyphen = '-';

// // 배열 길이만큼 순회하면서 = 나오는 위치 출력
// for (let i = 0; i < input.length;) {
//     console.log(input.indexOf(equalSign, i));
//     if(i === -1){
//         i++;
//     } else {
//         i = input.indexOf(equalSign, i)+1;
//     }
// }

//---------------------------------------------------------------------------

// 크로아티아 알파벳의 배열에 해당하는 게 문자열에 있으면 반환
// 크로아티아 배열을 하나씩 순회하면서 ++ 
// 어떻게 해야 알파벳을 한글자로 붙일까

let croatiaArray = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (let i = 0; i < croatiaArray.length; i++) {

    result = input.indexOf(croatiaArray[i]);
    if(result === -1){ // 찾는 값이 없다면 다음 알파벳으로
        i++;
    }
    // 있다면
}

// 나랑 비슷하게 생각한 것
// https://velog.io/@dragoocho/%EB%B0%B1%EC%A4%80-2941%EB%B2%88-Node.js-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4
