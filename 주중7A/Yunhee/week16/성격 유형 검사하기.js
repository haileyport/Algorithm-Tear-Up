function solution(survey, choices) {
    let table = new Map();
    Array("R","T","C","F","J","M","A","N").forEach(e => table.set(e,0));
    
    survey.forEach((e, i) => {
        let score = choices[i] - 4;
        
        if(score > 0){
            table.set(e[1], table.get(e[1]) + score);
        }else if(score < 0){
            table.set(e[0], table.get(e[0]) + Math.abs(score));
        }
    });
    
    let answer = "";
    
    Array("RT","CF","JM","AN").forEach(e => {
        answer += [...e].sort((a,b) => table.get(b) - table.get(a))[0];
    });
    
    return answer;
}