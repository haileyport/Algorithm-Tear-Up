function solution(s) {
    if (s.length !== 4 && s.length !== 6){
        return false;
    }
    if(s.split('').map(Number).filter(el => Number.isNaN(el) === true).length !== 0){
        return false;
    }
    return true;
}

//11점 

