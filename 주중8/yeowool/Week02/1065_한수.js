// 함수  1065  한수 
// 난이도 : 실버4  
// 풀이시간 : 3시간 실패
// 메모리 :  KB      
// 시간 :   ms      
// 코드길이 :  B

////////////////////////실패 코드 시작////////////////////////////////
// 첫 번째 문제풀이 의사코드
// 한수는 등차수열을 이룬 배열의 숫자간 간격을 말한다!(라고 이해했지만 확신없음)  => 틀렸지롱
// 주어진 N의 숫자를 나눴을때 0으로 떨어지는 숫자를 배열로 받아서 길이를 출력한다.


// let inputNum = 1000;
// let hanNum = [];

// for(let i = 0; i <= inputNum; i++) {
//     if(inputNum % i === 0) {
//         hanNum.push(i)
//     }
// }

// console.log(hanNum.length);

////////////////////////실패 코드 끝////////////////////////////////

// 이후 한수에 대한 개념을 여기저기 찾아보다가 한수이해만 40분 했다^^...



////////////////////////두 번째 실패 코드 시작////////////////////////////////

// 두 번째 문제풀이 의사코드
// 1. 한수를 구하는 함수를 만든다.
//    => n이 들어오면 그 수를 split하여 등차수열인지 확인하여 ture면 return 
//    => 등차수열인지 확인하는 함수 내부 알고리즘
//       a. 들어오는 수의 1의자리와 2의 자리는 모두 자동으로 등차수열으로 인정되므로 바로 return한다
//       b. 이후 3개 이상의 숫자는 split으로 쪼개서           
// 2. 1부터 주어진 숫자 n까지 순회하며 한수를 return 하는 함수에 인자로 전달한다.
// 3. 함수에서 출력된 숫자를 hanNum으로 선언한 배열에 push로 담아서 hanNum의 길이를 최종 값으로 return한다.

// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();

const input = 500

function findHanNum(num) {
    let result;
    num = String(num).split("");
    if(num.length <= 2) {
        result = num.join();
    } else if(num.length >= 3) {
        let a = Number(num[0]) - Number(num[1])
        let b = Number(num[1]) - Number(num[2])
        if(a === b)
        result = num.join();
    }
    return result;
}

let hanNum = [];
for(let i = 0; i < input; i++) {
    hanNum.push(findHanNum[i]);
}
console.log(hanNum.length);

// 등차수열인지 아닌지 판별하는 함수는 완성했지만
// 모든 숫자가 push되어서 입력과 출력이 같게 나온다 이제 한계...

////////////////////////두 번째 실패 코드 끝////////////////////////////////




