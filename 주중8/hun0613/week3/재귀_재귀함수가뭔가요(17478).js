// memory : 9736KB
// time : 136ms


// 반복되는 문장
    // "재귀함수가 뭔가요?"
    // "잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
    // 마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
    // 그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."

// '어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.' 출력 (재귀되는 문장이 아님)

// 1. 재귀함수 num을 파라미터로 받는 recursive 정의 (num은 재귀 횟수를 알려줄 계획)
    // 1-1. 만약 num이 1보다 작거나 같으면
        // 1-1-1. "재귀함수가 뭔가요?" 출력
        // 1-1-2. "재귀함수는 자기 자신을 호출하는 함수라네" 출력
        // 1-1-3. 라고 답변하였지. 출력
    
// < 위에서 부터 차근차근 출력>
// '"재귀함수가 뭔가요?"' 출력
// '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.' 출력
// '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.' 출력
// '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."' 출력
// recursive(num - 1);


let fs = require('fs');
let input = parseInt(fs.readFileSync('input.txt').toString().split(' '));

const underBar = '____';


console.log('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.');
console.log('"재귀함수가 뭔가요?"');
console.log('"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.');
console.log('마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.');
console.log('그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."');

function recursive(num, count){
    if(num === 1){
        console.log(underBar.repeat(count) + '"재귀함수가 뭔가요?"');
        console.log(underBar.repeat(count) + '"재귀함수는 자기 자신을 호출하는 함수라네"');
        console.log(underBar.repeat(count) + '라고 답변하였지.');
        recursive(num - 1, count - 1);
    }else if(num <= 0){
        if(count === 0){
            console.log('라고 답변하였지.');
        }else{
            console.log(underBar.repeat(count) + '라고 답변하였지.');
            recursive(num - 1, count -1);
        }
    }else{
        console.log(underBar.repeat(count) + '"재귀함수가 뭔가요?"');
        console.log(underBar.repeat(count) + '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.');
        console.log(underBar.repeat(count) + '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.');
        console.log(underBar.repeat(count) + '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."');
        recursive(num - 1, count + 1);
    }

    // recursive(num - 1);
}

recursive(input, 1);

