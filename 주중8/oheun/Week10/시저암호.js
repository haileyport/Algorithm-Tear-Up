/*

아이디어
- charCodeAt으로 알아내고
- fromCharCode로 더하자
- 나머지 연산자를 사용해볼까?
- 아니면 걍 배열 2개 만들까

틀린 이유 : 아하 z 다음에 a네
- 90 이후에는 다시 65로 돌아감
- 122 이후에는 다시 98로 돌아감
- 어떻게 다시 돌아갈까?
    - 알파벳은 똑같이 26글자임.
    - z 넘으면 26부터 시작해!
- 인마 넌 뭐가 문제야!!

유사코드 : 
1. 문자열을 받아서 아스키 코드로 바꾼다
2. 
*/



// /**
//  * @todo 시저 암호 만들기
//  * @param {*} s 알파벳 소문자, 대문자, 공백
//  * @param {*} n 밀 수
//  * @returns s를 n만큼 밀어서 만든 시저 암호
//  */
//  function solution(s, n) {
//     // return String.fromCharCode(65);
//     //charCodeAt(index)
//     // let ex = s.split("").map((cur, idx) => {return cur!==" "?s.charCodeAt(idx)+n:cur});
//     let ex = s.split("").map((cur, idx) => {return s.charCodeAt(idx)+n});
//     return ex.map(code => {
//         if (code===32+n){return " ";}
//         return code>122? String.fromCharCode(code-26):String.fromCharCode(code)
//     }).join("");
//  }  


// // 왜 안될까??
// function solution(s, n) {
//     let upper = Array.from({length:26}, (v, i) => String.fromCharCode(65+i));
//     let lower = Array.from({length:26}, (v, i) => String.fromCharCode(97+i));
//     let alphabet = upper.concat(lower);
    
//     let str = s.split("").map((cur, idx) => s.charCodeAt(idx));
//     return str.map(number => {
//         if(number==="32"){ // 공백이면
//             return String.fromCharCode(number);
//         }
//         let diff = 0;
//         if(number >= 122) {
//             return lower[n-1];
//         }else if(number >= 97){
//             diff= 97-number;
//             return lower[diff + n];
//         }else if(number >= 65 && number <=90){
//             diff= 66-number;
//             return upper[diff + n ]
//         }
        
        
//         // return number>=122?alphabet[25+n]:alphabet[25+n];
//     }).join("");
// }
