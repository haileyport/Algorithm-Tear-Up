// https://nyang-in.tistory.com/211

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let number = Number(input);
let str = "";

function PaintStar(i, j){
    if(i % 3 === 1 && j % 3 === 1){
        str += " ";
    }else{
        if(Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0){
            str += "*";
        }else{
            PaintStar(Math.floor(i / 3), Math.floor(j / 3));
        }
    }
}

for(let i = 0; i < number; i++){
    for(let j = 0; j < number; j++){
        PaintStar(i, j);
    }
    if(i !== number - 1){
        str+= "\n";
    }
}
console.log(str);