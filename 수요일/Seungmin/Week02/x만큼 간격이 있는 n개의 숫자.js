function solution(x, n) {
    //x만큼 누적되어 추가, 배열의 길이는 n
    var answer = [];
    
    for(let i=1; i<=n; i++){
        answer.push(x*i);
    }
    
    return answer;
    
}