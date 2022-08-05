// 함수  4673  셀프 넘버 
// 난이도 : 실버5  
// 풀이시간 : 반나절 이상.. 실패!
// 메모리 :   12440 KB 
// 시간 : 252 ms
// 코드길이 : 451 B

// 의사코드
// 셀프넘버의 특징을 찾아보자.
// 입력된 숫자가 한자리일경우 n+n을 하고 두자리일 경우 nn+n+n을 하는데, 
// 이렇게 순서대로 해서 나오지 않는 숫자가 바로 셀프넘버!

// 1. for문 안에서 1~10000까지 순회하며 더해주는데 일단 totalNum을 배열형태로 선언 후 
//    n이 한자리일 경우에는 n+n을 해서 totalNum에 push하고 두자리 이상일 경우 안에 for문으로 n + n을 sum에 담고 sum + n을 totalNum에 push한다
// 2. 이렇게 받은 배열 totalNum을 다시 for문을 돌려서 10000과 하나씩 비교하는데
//    for문 안에 if문으로 !totalNum.includes(i)로 있는지 없는지 검사해서 없는 숫자를 n + "\n"형태로 리턴해준다.

let totalNum =[];
let sum = 0;

for(let i = 0; i <= 10000; i++) {
    if(i.length === 1) {
        sum = Number(i) + Number(i);
        console.log(sum)
        totalNum.push(sum)
        console.log(totalNum)
    } 
}

// 오류 :  빈배열로 들어온다.무슨짓을해도 빈배열...

// 한시간초과.. 

// 더이상의 타이머 기록은 의미없고 몇시간째 고민했으므로 풀이를 보며 내가 이해한대로 풀이 과정을 상세하게 적는다.

// 1. 먼저 체크넘버인지 아닌지 판별하는 notSelfNum 함수를 만든다.
//    notSelfNum은 셀프넘버가 아닌 숫자를 반환하는 함수다. 
// 2. selfNum을 선언하여 길이가 10000인 ture로 담겨있는 배열을 만든다.
// 3. for문을 열어 그 안에 notSelfNum을 함수실행하여 return되는 숫자가 있는 자리에 false를 넣는다.
//    이렇게 하면 전부 true였던 selfNum 배열이 셀프넘버는 ture, 셀프넘버가 아닌 숫자는 false로 나뉘게 된다.
// 4. 다시 for문을 열어서 selfNum의 배열중 ture값인 자리의 숫자를 console.log로 return한다.

function notSelfNum (num) {
    let number = num;
    let result = 0;

    for(let i = 0; i < String(num).length; i++) {
        result += number % 10;
        number = Math.floor(number / 10);
    }
    return num + result;
}

const range = 10000;

let selfNum = Array(range + 1).fill(true);

for(let i = 0; i <= range; i++) {
    selfNum[notSelfNum(i)] = false;
}
for(let i = 0; i < range; i++) {
    if(selfNum[i]) {
        console.log(i);
    }
}
