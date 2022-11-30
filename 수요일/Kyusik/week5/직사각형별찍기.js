process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const garo = Number(n[0]), saero = Number(n[1]);
    for(let i = 0; i < saero; i++){
        let star = '';
        for(let j = 0; j < garo; j++){
            star = star + '*';
        }
        console.log(star);
    }
});