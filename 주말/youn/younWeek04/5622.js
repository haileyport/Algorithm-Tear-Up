const input = require("fs").readFileSync("/dev/stdin").toString().trim();



let dial = {
    ABC: 3,
    DEF: 4,
    GHI: 5,
    JKL: 6,
    MNO: 7,
    PQRS: 8,
    TUV: 9,
    WXYZ: 10,
    };
    
    let count=0;
    for (let i=0; i<input.length; i++) {
    for (let x in dial) {
        if(x.includes(input[i])) {
            count += dial[x];
        }
    }
}

console.log(count);