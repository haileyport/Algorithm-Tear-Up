function solution(s){
    let arrayS = s.toLowerCase().split('')
    if(arrayS.filter(el => el === "p").length === arrayS.filter(el => el === "y").length){
        return true;
    }
    return false;
}

//3점