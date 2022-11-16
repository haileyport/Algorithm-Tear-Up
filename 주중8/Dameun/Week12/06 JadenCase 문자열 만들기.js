function solution(s) {
    let ifSpace = true;
    let arr = s.split('');
    let result = ''
    for(let n of arr){
        if(n === ' '){
            result += n;
            ifSpace = true;
        }else if(ifSpace){
            result += n.toUpperCase()
            ifSpace = false;
        }else{
            result += n.toLowerCase()
        }
    }
    return result;
}

//10분
//8점
