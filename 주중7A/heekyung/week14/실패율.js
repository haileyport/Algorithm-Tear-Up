function solution(N, stages) {
    var answer = [];
    let arr = []
    for (let i = 1; i <= N; i++) {
        let success = 0
        let fail = 0
        for (let j = 0; j < stages.length; j++) {
            if (stages[j] > i) {
                success++
            } else if (stages[j] === i) {
                fail++
            }
        }
        success += fail
        arr.push([i, fail / success])

    }
    arr = arr.sort(function (a, b) {
        return b[1] - a[1];
    })

    return arr.map(el => el[0])



}
