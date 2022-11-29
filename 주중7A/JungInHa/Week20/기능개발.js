function solution(progresses, speeds) {
    let daysNeeded = progresses.map((func, idx) => {
        return Math.ceil((100 - func) / speeds[idx])
    })
    
    let answer = [];
    
    let released = 0;
    let max = daysNeeded[0];
    for (let i = 0; i < daysNeeded.length; i++) {
        released++;
        
        if (max >= daysNeeded[i+1]) continue;
        answer.push(released);
        max = daysNeeded[i+1];
        released = 0
        
    }
            
    return answer;
}
