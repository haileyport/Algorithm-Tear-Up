let fs = require('fs');
const { format } = require('path');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('test.txt').toString( ).trim();

// 백준 17478번, 재귀함수가 뭔가요?
// 실버 5/ 9752KB/ 144ms

// 자동응답챗봇..?
// 기본 첫 문장: 어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.
// 1기준으로 문장마다 앞에 __ (언더바 두개)가 붙음 (2부터 문장앞에 붙이는듯?)


const n = Number(input);

let phrases = [
'어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.',
"\"재귀함수가 뭔가요?\"",
"\"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.",
"마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.",
"그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.\"",
"\"재귀함수는 자기 자신을 호출하는 함수라네\"",
"라고 답변하였지." 
];

// 첫 시작 문장 불러와 출력
console.log(phrases.shift()); //'어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.'

// 반복할 문장들만 slice를 이용해 새로운 배열로 새 변수에 할당해주기 
let phrase = phrases.slice(0, phrases.length -2);
let result;
let underBar = '';

// 반복문을 이용해 n만큼 반복하며, 반복할 때마다  '___'를 repeat을 이용해 i만큼 추가하여 문장과 연결해준다
for(let i = 0; i < n; i++){
  phrase.map(el => {
    console.log(result = "____".repeat(i) + el);
  });
}

console.log("____".repeat(n) + phrase[0]); // "재귀함수가 뭔가요?\"
console.log("____".repeat(n) + phrases[4]); // "재귀함수는 자기 자신을 호출하는 함수라네"

// n부터 감소하며 마지막문장에 i만큼 더해 출력
for(let i = n; i >= 0; i--){
  let lastPhrases = phrases.slice(-1).join('');
  console.log("____".repeat(i) + lastPhrases);
}


