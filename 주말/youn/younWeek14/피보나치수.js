function solution(n) {
    let answer = 0;
    let f1 = 0, f2 = 1;
    
    for(let i = 2; i <= n; i++){
        answer = (f1 + f2) % 1234567;
        f1 = f2;
        f2 = answer;
    }
    
    return answer;
}