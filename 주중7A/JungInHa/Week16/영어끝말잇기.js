// 가장 먼저 탈락하는 사람의 번호 + 자신의 몇 번째 차례에 탈락하는지를 return
// 정답은 [ 번호, 차례 ] 형태
// 탈락자가 생기지 않는다면, [0, 0]을 return

// 가장 먼저 탈락하는 사람의 번호 = 처음 틀린 단어의 인덱스+1 % 참여 인원 (나눠 떨어지면 마지막 사람) 
    // 이전에 사용됐던 단어거나 
    // 직전 단어의 마지막 알파벳으로 시작하지 않는 첫번째 단어의 인덱스를 구한다
// 틀린 단어가 없으면 [0, 0]을 리턴한다
// 가장 먼저 탈락하는 사람의 번호 = 틀린 단어 인덱스 + 1 % 참여인원 
// 자신의 몇 번째 차례에 탈락하는지 =  (틀린 단어 인덱스 + 1 / 참여인원)을 올림

function solution(n, words) {
    let failIdx;
    for (let i = 1; i < words.length; i++) {
        if (words.indexOf(words[i]) !== i ||
        words[i-1].slice(-1) != words[i][0]) {
            failIdx = i;
            break;
        }
    }
    
    if (!failIdx) return [0, 0];
    
    let person = ((failIdx + 1) % n || n);
    const turn = Math.ceil((failIdx + 1) / n);
    return [person, turn];
}
