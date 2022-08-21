const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().toUpperCase();

const result = new Array(26).fill(0); // 임의의 배열 result에 알파벳 숫자만큼 0으로 채움

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 65] ++; // 인풋의 i번째 알파벳을 아스키로 변환해서 대문자A의 아스키인 65를 뺀 값 = 배열 result의 인덱스 -> input 문자열의 알파벳을 조회하고 그 알파벳에 해당하는 배열 result의 인덱스에 1씩 더함.
}

const max = Math.max(...result); // result 배열에서 최댓값 찾기
const index = result.indexOf(max); //그 최댓값의 인덱스 찾기(최댓값이 중복되었을 경우 가장 앞의 인덱스 리턴)

//String.fromCharCode(index + 65) 인덱스에 다시 65를 더해서 문자열로 변환

//가장 많이 사용된 알파벳이 여러개 존재하는 경우...
let isSame = false;

for (let j = 0; j < 26; j++) {
  if (result[j] === max && index != j) { // 배열result의 j번째 인덱스가 최댓값인데, j번째 인덱스는 가장앞에 나오는 최댓값의 인덱스가 아닐 경우, 즉 중복되었을 경우
    isSame = true;
    //break;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));

// let resultArr = [];

// for(let i = 0; i < input.length; i++){
//     let count = 0;
//     for(let j = 0; j < input.length; j++){
//         if(input[i] === input[j]){
//             count++;
//         }
//     }
//     resultArr.push(count);
// }
// console.log(resultArr);

// const max = Math.max(...resultArr);
// const maxIndex = resultArr.indexOf(max);

// console.log(input[maxIndex]);