// 직사각형 별찍기

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for (let i = 1; i <= b; i++) {
        let star = ''
        for (let k = 1; k <= a; k++) {
            star = star + '*'
        }
        console.log(star)
    }

});

// 테스트 1 〉	통과 (42.04ms, 32MB)
// 테스트 2 〉	통과 (42.15ms, 32.1MB)
// 테스트 3 〉	통과 (44.19ms, 32.1MB)
// 테스트 4 〉	통과 (62.47ms, 32.1MB)
// 테스트 5 〉	통과 (43.29ms, 32MB)
// 테스트 6 〉	통과 (47.89ms, 32MB)
// 테스트 7 〉	통과 (62.96ms, 32MB)
// 테스트 8 〉	통과 (54.95ms, 33MB)
// 테스트 9 〉	통과 (52.84ms, 36.9MB)
// 테스트 10 〉	통과 (53.91ms, 32.4MB)
// 테스트 11 〉	통과 (57.97ms, 36.6MB)