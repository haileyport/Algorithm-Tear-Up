function solution(answers) {
    const student1 = [1, 2, 3, 4, 5];
    const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let scores = [0, 0, 0]; 
    answers.forEach((ans, i) => {
        let idx1, idx2, idx3; 
        if (i === 0) [idx1, idx2, idx3] = [0,0,0]; 
        else {
			idx1 = i % 5;
            idx2 = i % 8;
            idx3 = i % 10;
        }
        
        if (student1[idx1] === ans) scores[0]++; 
        if (student2[idx2] === ans) scores[1]++;
        if (student3[idx3] === ans) scores[2]++;
    })
    
    const maxScore = Math.max(...scores); 
    let answer = []; 
    scores.forEach((n, idx) => { 
        if (n == maxScore) answer.push(idx + 1);
    })
  
    return answer;
}
