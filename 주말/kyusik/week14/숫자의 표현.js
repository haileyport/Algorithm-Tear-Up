function solution(n) {
    let answer = 0;
    
    for(let i = 1; i < n / 2; i++) {
        let temp = i;
        for(let j = i + 1; j < n; j++) {
            temp += j;
            if(temp === n) answer ++
            else if(temp > n) break;
        }
    }
    return answer + 1
}