function solution(strings, n) {
    let newStrings = [...strings];
    let answer = [];
    
    
    if (strings.length === 1){
        return strings
    }
    // strings 배열의 원소의 2번째 문자 비교
    // 만약 2번재 문자가 같은것이 있다면
    // 앞에서부터 비교
    let small = strings[0];
    let index = 0;
    
    for (let i = 1; i < strings.length; i++){
        if (small[n] > strings[i][n]){
            small = strings[i];
            index = i;
        }else if(small[n] === strings[i][n]){
            if (small > strings[i]){
                small = strings[i];
                index = i;
            }
        }   
    }
    
    answer.push(small);
    newStrings.splice(index,1);
    
    return [...answer, ...solution(newStrings, n)];
}