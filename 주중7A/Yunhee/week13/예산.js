function solution(d, budget) {
    // 최대한 많은 부서의 물품 구매
    let count = 0;
    let sum = 0;
    d = d.sort((a, b) => a - b);
    
    for(let cost of d){
        if(sum + cost <= budget){
            sum += cost;
            count++;
        }
    }
    
    return count;
}