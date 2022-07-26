// 기본수학1 1712  손익분기점 실패
// 난이도 : 브론즈2  
// 풀이시간 :  분
// 메모리 :  KB      
// 시간 :   ms      
// 코드길이 :  B

// 1. 손익분기점 구하려면? => 노트북 가격 C에서 가변비용 B를 뺀 값을 고정비용에서 나눈다.
// 2. input을 const로 다시 할당해주어 순서대로 A, B, C가 되게 한다.
// 3. 노트북 가격 C가 가변비용 B보다 작으면 적자일수밨에 없게 되기 때문에 -1출력한다.


const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);


const [A, B, C] = [input[0], input[1], input[2]];
// => A 고정비용 B 가변비용 C 노트북가격

// const [A, B, C] = [3, 2, 1];

if(B > C) {
    console.log(-1);
} else {
    let marjin = A / (C - B) + 1;
    if(marjin > 0) {
    console.log(marjin)
    } else {
        console.log(-1);
    }
    
}

// 테스트케이스틑 모두 통과하는데 문제가 틀렸다고 한다..ㅜ