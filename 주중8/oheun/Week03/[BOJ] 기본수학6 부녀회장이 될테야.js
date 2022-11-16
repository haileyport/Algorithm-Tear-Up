/*
통과 여부 : 실패
공간 복잡도 : 
시간 복잡도 : 

시간제한 : 1초
메모리 제한 128MB

input : 
    - 테스트 케이스의 숫자 T
    - 첫 줄에 정수 k
    - 두 번째 줄에 정수 n
    - 1 ≤ k, n ≤ 14
output :각각의 Test case에 대해서 해당 집에 거주민 수

2775번 부녀회장이 될테야


** 생각
1. a층 b호
    - a-1층 1~b호까지의 사람들 => a = k, b = n : 0층부터 14층까지, 1호부터 14호까지
    - 1층 3호 => 0층 1호, 0층 2호, 0층 3호 => 호의 합이므로 1+2+3
    - 2층 3호 -> 1층 1호, 1층 2호, 1층 3호 => 왜 4가 추가됐지?
        : 1~k층에는 k-1층 1~ (n-1)호만큼 산다.
    - 정수의 합 (n+1)n * 1/2
    - k층 n호에 사는 사람은 k-1층 1~ (n-1)호에 사는 것이고, 
        => f(n) = 합(1~n-1) = n(n-1) * 1/2 = (n^2 - n)/2
    - k층 n-1호에 사는 사람은 k-1층 1~(n-2)호에 사는 사람임. 
        => f(n-1) = 합(1~n-2) = (n-1)(n-2) * 1/2 = (n^2-3n+2)/2
    - 둘의 차이는 2n-2차이
    - 3호면 3 + 2n-2하면 되려나 - 아님

** 의사코드
0. 입력 받기
    - 첫 줄을 testCase에 저장
1. if문 k가 1이랑 같거나 작으면 n 더하기
2. if문 k가 2보다 크거나 같으면 1~n까지의 합 + 2n-2
*/

let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split(' '); 
let input = fs.readFileSync('input.txt').toString().trim().split('/n'); 

const testCase = Number(input[0]);
let arr = [];

for (let i = 1; i < input.length; i++) {
    arr.append(input[i])
}

console.log(arr);
