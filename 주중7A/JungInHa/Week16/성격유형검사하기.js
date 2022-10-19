// 각 유형별 점수를 구한다. choices의 답안별로 다음과 같이 점수를 더한다: 
    // 1 ~ 3은 i번째 survey의 첫번째 글자 유형에 점수를 더한다. (3 ~ 1점 -> |답 - 4| 점)
    // 4는 어떤 유형에도 점수를 더하지 않고 지나친다.
    // 5 ~ 7은 i번째 survey의 두번째 글자 유형에 점수를 더한다. (1 ~ 3점 -> 답 - 4 점)
// 각 지표별로 더 점수가 높은 유형을 구해 답에 더한다.
    // 동점일 경우 사전순으로 빠른 순이 채택된다.

function solution(survey, choices) {
    let scores = {
        "R" : 0, "T" : 0,
        "C" : 0, "F" : 0,
        "J" : 0, "M" : 0,
        "A" : 0, "N" : 0
    };
    
    survey.forEach((q, idx) => {
        const option = choices[idx];
        if (option !== 4) { 
            const type = (option <= 3) ? q[0] : q[1];
            const score = Math.abs(option - 4);
            scores[type] += score;
        }
    });

    let answer = '';
    const types = ['RT', 'CF', 'JM', 'AN'];
    types.forEach(set => {
        const [type1, type2] = set; 
        const score1 = scores[type1]; 
        const score2 = scores[type2];
        
        if (score1 !== score2) answer += (score1 > score2) ? type1 : type2;
        else answer += (type1 < type2) ? type1 : type2; 
    })

    return answer;
}
