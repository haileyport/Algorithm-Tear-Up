function solution(d, budget) {
    
    let answer = 0;
    let sum = 0;

    d.sort((a, b) => a-b);
    
    d.forEach(el=>{
        sum += el;
        if(sum <= budget) answer++
    })    
    return answer;
}
