const fs = require("fs");
const { stringify } = require("querystring");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim()//.split("\n");
// math floor 써서 다시풀어보자 하승님 참고
if (input < 10) {
    console.log(input);
} else if (input < 100) {
    console.log(input);
} else {
    let count = 99;
    for (let i = 100; i <= input; i++) {
        if (String(i)[0] - String(i)[1] === String(i)[1] - String(i)[2]) {
            count++;
        }
    }
    //console.log(input[2], input[1], input[0])
    console.log(count);
}
/* 
n은 n<=1000 인 자연수
n이 1의자리 = 모두 다 한수. 즉 9개  1 2 3 4 5 6 7 8 9
n이 두자릿수 = 모두 다 한수. 즉 90개 1 0 11 12 13 
n이 세자릿수
100의자리 - 10의자리 = 10의자리 - 1의자리 -> 한수


100~109 x
110~119 111 1 
120~129 123 1
130~139 135 1
140~149 147 1
150~159 159 1
160 169 x
170~179 x
...
200~209 x
210~219 210 1
220~229 222 1
230~239 234 1
240~249 246 1
250~259 258 1
260~269 x
...
300~309 x
310~319 x
320~329 321 1
330~339 333 1
        345
        357
        369
...
400~409 x
410~419 x
420~429 420
        432
        444
        456
        468
        ...
        x
        x
        x
        531
        543
        555
        567
        579
        ...
        x
        x
        x
        630
        642
        653
        666
        678
        ...
        x
        x
        x
        x
        741
        753
        765
        777
        789
        ...
        x
        x
        x
        x
        840
        852
        864
        876
        888
        ...
        x
        x
        x
        x
        951
        963
        975
        987
        999
*/