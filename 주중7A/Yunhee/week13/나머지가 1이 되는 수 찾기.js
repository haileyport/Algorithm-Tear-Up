function solution(n) {
    let min = n;
    
    for(let i = 2; i <= n; i++){
        if(n % i === 1){
            min = i < min ? i : min;
        }
    }
    
    return min;
}