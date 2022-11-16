function solution(N, stages) { 
    let stagePopulation = new Array(N).fill(0); 
    stages.forEach(n => {if (n <= N) stagePopulation[n - 1]++});
    
    let failureRates = []; 
    const players = stages.length; 
    let unreached = 0;
    stagePopulation.forEach((n, stageIdx) => {
        if (n === 0) failureRates.push([stageIdx + 1, 0]); 
        else {
            let rate = n / (players - unreached); 
            failureRates.push([stageIdx + 1, rate]); 
            unreached += n; 
        }  
    }) 
    
    failureRates.sort((a, b) => b[1] - a[1]); 
    let answer = failureRates.map(el => el[0]);

    return answer;
}
