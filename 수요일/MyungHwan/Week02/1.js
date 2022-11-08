function solution(s){
    let loowerS = s.toLowerCase().split('')
    
    let pCount = loowerS.filter(e => 'p' === e).length
    let yCount = loowerS.filter(e => 'y' === e).length
    if(pCount === yCount){
        return true
    } return false
}