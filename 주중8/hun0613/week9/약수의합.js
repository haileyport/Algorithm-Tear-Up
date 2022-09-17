function solution(n) {
    
    let answer = [];
    // 만약 n이 0이면 0을 리턴
    if (n === 0){
        return 0;
    }
    // n을 나눴을 때 나누어떨어지는 i는 모두 약수
    for (let i = 1; i <= n; i++){
      
        if (n % i === 0){
            answer.push(i)
        }
    }
    // 다 더하자
    return answer.reduce((a, b) => a + b);
}