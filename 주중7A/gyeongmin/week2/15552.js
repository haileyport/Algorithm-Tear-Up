let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().split("\n")

let answer = ''

for(let i = 1; i <= input[0]; i++) {
    tmp = input[i].split(' ')
    answer += parseInt(tmp[0]) + parseInt(tmp[1]) + "\n"
}

console.log(answer)
