let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = [`3 5`, `1 2 4`, `2 3 4 5 6`];
let [N, M] = input[0].split(' ').map(Number);
let a = input[1].split(' ').map(Number);//숫자로변경[1,2,4]
let b = input[2].split(' ').map(Number);//숫자로변경[2,3,4,5,6]

let answer = [...new Set([...a, ...b])];//124356123456 - 12423456 12-8
//new Set은 중복되는걸 방지->a랑 b를 합치면 ->[1,2,4,3,5,6]이 나옴

const result = 2 * answer.length - (a.length + b.length)
//몇개인지만 구하면 되는것이기 때문에 중복되지않은값 *2에서 각각의 요소를 빼준다

console.log(result)