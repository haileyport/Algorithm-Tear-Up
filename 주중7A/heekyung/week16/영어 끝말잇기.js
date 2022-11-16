function solution(n, words) {
    var answer = [];
    let arr = [words[0]]

    let firstString = words[0][words[0].length - 1]
    let i = 1;
    for (i; i < words.length; i++) {

        if (firstString === words[i][0]) {
            if (arr.includes(words[i])) {
                break;
            }
            arr.push(words[i])
            firstString = words[i][words[i].length - 1]

        } else {
            break;
        }
    }
    if (arr.length === words.length) return [0, 0]
    return [(i % n) + 1, Math.floor((i / n) + 1)]

    //return [n -(i+1)%n, Math.round((i+1)/n)] 이걸 잘못썼음

    // answer;
}




