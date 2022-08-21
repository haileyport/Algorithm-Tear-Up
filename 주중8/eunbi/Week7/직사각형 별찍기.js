// [프로그래머스] 직사각형 별찍기, 걸린시간:약 10분
// 함수인 줄 알고 return해서 실행하다가 계속 'output size differs'라는 문구가 떠서 찾아보니 console로 제출하시더라...
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const star = '*';
    // let result = [];

    for(let i = 0; i < b; i++){
        // result.push(star.repeat(a));
        console.log(star.repeat(a));
    }

    // console.log(result.join('\n'));
});