function solution(left, right) {
    // left부터 right까지의 약수를 구한다.
    // 구한 약수가 짝수하면 더하고 홀수라면 뺀다.
    let total = 0;
    
    for(let i = left; i <= right; i++){
        let count = 1;
        
        for(let j = 2; j <= i; j++){
            if(i % j === 0) count++;
        }
        
        total = count % 2 === 0 ? total + i : total - i;
    }
    
    return total;
}