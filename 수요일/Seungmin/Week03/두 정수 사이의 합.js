function solution(a, b) {

    if(a === b) return a;
    
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let answer = 0;
    
    for(let i = min; i<=max; i++){
        answer += i
    }
    
    return answer;
}