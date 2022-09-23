function solution(s) {
    let isItOdd = true
    let changeS = ''
    for (let i of s){
        if(i === ' '){
            changeS += ' '
            isItOdd = true;
        }else if(isItOdd){
            changeS += i.toUpperCase()
            isItOdd = false;
        }else{
            changeS += i.toLowerCase()
            isItOdd = true;
        }
    }
    return changeS
    }

    //11점 
    //https://school.programmers.co.kr/learn/courses/30/lessons/12930#
    //20분가량 
    