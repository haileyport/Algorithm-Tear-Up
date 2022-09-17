// 풀이시간 : 11분 34초

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    // console.log(a);
    // console.log(b);
    let shape = '*';
    for(i = 0; i < b; i++){
        console.log(shape.repeat(a));
    }
});