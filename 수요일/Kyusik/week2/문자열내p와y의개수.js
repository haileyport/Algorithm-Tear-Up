function solution(s){
    let pArr;
    let yArr;
    let sArr = s.split('');
    pArr = sArr.filter(el => el === 'p' || el === 'P')
    yArr = sArr.filter(el => el === 'y' || el === 'Y')
    return pArr.length === yArr.length ? true : false
}