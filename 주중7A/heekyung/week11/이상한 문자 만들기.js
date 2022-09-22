function solution(s) {

    let word = s.split(' ')
    var answer = '';
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word[i].length; j++) {
            if (j === 0) {
                answer += word[i][j].toUpperCase()
            } else {
                answer += j % 2 ? word[i][j].toLowerCase() : word[i][j].toUpperCase()
            }
        }
        if (i === word.length - 1) {
            break;
        }
        answer += ' '


    }

    return answer;
}
