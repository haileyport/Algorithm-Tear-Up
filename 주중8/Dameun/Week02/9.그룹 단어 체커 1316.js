let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = input[0]
let resultNumber = 0;

//그룹 단어 체커 
//문자열의 각 알파벳을 담는 배열을 만든다
//바로 전 (i)항목과 다음 항목이 (i+1)일치한다면 배열에 담지 않는다
//배열에서 중복값이 있다면 카운트 하지 않는다
//최종 카운트를 리턴한다 

for (let i = 1; i <= Number(count); i++) {
    let word = input[i].replace(/\r/g, "");
    let checker = [];
    checker.push(word[0]);
    for(let n = 1; n < word.length; n++ ){
        if(word[n-1] !== word[n]){
            checker.push(word[n])
        }
    }
    const newChecker = new Set(checker);
    if(newChecker.size === checker.length){
        resultNumber++
    }
}

console.log(resultNumber);

