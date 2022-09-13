function checkPrime(n) {
    for (let j = 2; j <= Math.sqrt(n); j++) {
        if (n % j === 0) {
            return false;
        }
    } 
    return true;
}

function solution(n) {
    let answer = 0;
    
    for (let i = 2; i <= n; i++) {      
        if (checkPrime(i)) answer++;
    }
    return answer;
}