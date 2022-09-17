function solution(s, n) {
    let arr = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97))
    arr = [...arr,...arr]
    let sToArr = s.split('').map((el) => {
        if(el === ' '){
            return el
        }else if(el === el.toUpperCase()){
            return arr[arr.indexOf(el.toLowerCase()) + n].toUpperCase()
        }else{
            return arr[arr.indexOf(el) + n]
        }
        }).join('');

    return sToArr;
}

let output = solution("AB", 1)
console.log(output);


//9점
//25분 
