function solution(lottos, win_nums) {
    var answer = [];
    
    //루프를 돌면서 lottos에 있는 원소가 win에 있으면 제외시키고 카운트 더하기
    let count = 0;
    let whatNum = 0;
    let match = [];
    for(let i = 0; i < lottos.length; i++){
        if(lottos[i] === 0) whatNum++;
        for(let j = 0; j < win_nums.length; j++){
            if(lottos[i] === win_nums[j]){
                count++;
                match.push(lottos[i]);
            }
        }
    }
    console.log(match, count, whatNum)
    if(count === 0 && whatNum === 0) answer.push(6, 6)
    if(count === 6) answer.push(1, 1)
    if(count === 0 && whatNum !== 0) answer.push(1, 6)
    if(count === 5) answer.push(7-count-whatNum, 7-count)
    if(count === 4) answer.push(7-count-whatNum, 7-count)
    if(count === 3) answer.push(7-count-whatNum, 7-count)
    if(count === 2) answer.push(7-count-whatNum, 7-count)
    if(count === 1) answer.push(7-count-whatNum, 7-count)
    return answer;
}
