const input = require('fs').readFileSync('/dev/stdin').toString()
function returnFunc(num){
    if (num < 2) {
        return num
    }
    return returnFunc(num -1 ) + returnFunc(num-2)
}
console.log(returnFunc(input))