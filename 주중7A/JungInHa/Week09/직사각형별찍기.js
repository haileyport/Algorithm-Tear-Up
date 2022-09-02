process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for (let i = 0; i < b; i++) { // 줄바꿈
        console.log('*'.repeat(a)) // 길이만큼 별 찍기
    }
});