process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const star = "*"
    for(let n = 1; n<= b; n++){
        let result = "";
        for(let m = 1; m<= a; m++){
            result += star;
        }
        console.log(result)
    }
});

//https://school.programmers.co.kr/learn/courses/30/lessons/12969
//풀이시간 : 10여분 내외 