const input = require('fs').readFileSync('/dev/stdin').toString()
let result =''
for ( i = 1 ; i <= input ; i++){
    result += i+'\n'
}
console.log(result)