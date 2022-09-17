/*
통과 여부 : 
시간 : 
점수 : 

[아이디어]
- 최대공약수는 for문으로 1과 n까지 중에 나누어 떨어지는 것 중 가장 작은 수
- 최소공배수는 공통된 배수 중 가장 작은 수
- 근데 for문 두 그룹 쓰기 귀찮아! filter를 쓸까?
- 배수 중 작은 수? reduce 쓸까?

filtered을 순회하면서 filter로 나누어 떨어지면 반환하도록
*/

function solution(n, m) {
// 최대공약수 GCD
// 최소공배수 LCM
// 아 소수로 일단 나눌까?
    
    // 개수가 n인 배열을 1부터 n까지 채우고
    let nArr = new Array(n).fill().map((v, i) => {return i+1});
    let mArr = new Array(m).fill().map((v, i) => {return i+1});

    let filteredN = nArr.filter((num)=>{return n%num === 0? num: false;})
    let filteredM = mArr.filter((num)=>{return n%num === 0? num: false;})
    let answer = filteredN.filter(it => filteredM.includes(it));
    
    return answer[answer.length-1];
}