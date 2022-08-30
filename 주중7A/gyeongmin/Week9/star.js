process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    //console.log(a);
    //console.log(b);
    let width = ''
    for(let i = 0; i < b; i++){
        for(let j = 0; j < a; j++){
            width += '*'
        }
        width += '\n'
    }
    console.log(width)
});
