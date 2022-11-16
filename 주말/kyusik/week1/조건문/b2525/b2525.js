const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n"); // \n기준으로 인풋을 나눔 - > 나눴더니 [ '14 30', '20', '' ] 이렇게 나옴. 이 배열에서 0번째 요소인 '14 30'을 공백 기준으로 다시 나눠야 할 것 같음. 20은 그대로 쓸 수 있음

let h = Number(input[0].split(" ")[0]); // '14 30'을 split 을 통해 공백 기준으로 나누고 split을 통해 나눠진 문자열은 배열에 저장되기 때문에, 0번째 요소를 호출하기 위해 [0]를 적음 (input 배열의 0번째 요소가 아니라 input 배열의 0번째 요소인 '14 30'을 split으로 나눠서 생긴 배열의 0번째 요소) 그리고 그 요소를 숫자로 바꿈 -> 현재시간을 나타내는 입력
let m = Number(input[0].split(" ")[1]); // 위와 마찬가지 과정을 거치고 1번째 요소를 호출하기 위해 [1]을 적음 -> 현재 분을 나타내는 입력
let c = Number(input[1]); // 요리하는데 필요한 시간을 나타내는 입력
/*
1. c와 m 을 더했을때 60을 넘으면 60으로 나눴을때 몫을 h에 더하고 나머지를 m에 할당해야함
2. 이때 h가 24를 넘어가면 h에서 24를 뺀 값을 h에 할당해야함
3. c와 m을 더했을 때 60을 넘지 않으면 더한 값을 m에 할당해야함
*/
if (c + m >= 60) {
    h = Math.floor(h + ((c + m) / 60));
    m = (c + m) % 60;
    
    if (h >= 24) {
        h = h - 24;
    } 
} else {
    m = c + m;
} console.log(h, m);