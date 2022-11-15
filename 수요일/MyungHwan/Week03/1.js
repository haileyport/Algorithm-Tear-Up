function solution(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let sum = 0;
    
    for(let i = min; i<= max; i++){
        sum = sum + i;
    }return sum;
}