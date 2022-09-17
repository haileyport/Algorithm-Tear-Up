function solution(lottos, win_nums) {
    var answer = [];
    let matching = 0; 
    let zeros = 0; 

    for (let i = 0; i < lottos.length; i++) {
        if (win_nums.includes(lottos[i])) matching++; 
        if (lottos[i] === 0) zeros++;
    }
    
    let highest = (matching + zeros > 0) ? 7 - (matching + zeros) : 6;
    let lowest = (matching > 0) ? 7 - matching : 6;

    answer.push(highest, lowest)
    return answer;
}