function solution(d, budget) {
    d.sort((a, b) => a - b);
    
    let i;
    for (i = 0; i < d.length; i++) {
        budget -= d[i];
        if (budget < 0) break;
    }
    return i;
}
