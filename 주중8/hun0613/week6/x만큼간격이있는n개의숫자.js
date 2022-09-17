// 풀이시간 : 5분 30초

function solution(x, n) {
    var answer = [];
    // x씩 증가하는 등차수열 n 개
    
    // x씩 증가될 sum 0으로 초기화
    let sum = 0;
    // for 문으로 i는 1부터 n보다 작을 때까지 순회하면서
    for (let i = 0; i < n; i++){
    // answer에 sum + x 를 push
        sum += x;
        answer.push(sum)        
    }
        
    return answer;
}