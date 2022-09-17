//let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//console.log(input)

let haveCard = new Set(input[1].split(' ').map(Number))
let cards = input[3].split(' ').map(Number)
let result = [];
//console.log(haveCard) //['6', '3', '2', '10', '-10']
//console.log(cards) //['10', '9', '-5', '2', '3', '4', '5', '-10']

for(let i = 0; i < cards.length; i++){
    if(haveCard.has(cards[i])){
        result.push(1)
    }else{
        result.push(0)
    }    
}
console.log(result.join(' '))
