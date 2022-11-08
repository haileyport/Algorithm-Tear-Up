function solution(n) {
    var answer = 0;
    
    let sqrt = Math.sqrt(n);
    
    sqrt === parseInt(sqrt) ? answer = Math.pow(1+sqrt,2) : answer = -1
    
    return answer;
}