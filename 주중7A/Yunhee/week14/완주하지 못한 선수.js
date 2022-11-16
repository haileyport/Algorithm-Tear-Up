function solution(participant, completion) {
    const obj = {};
    
    for(let par of participant){
        if(!obj[par]) obj[par] = 0;
        obj[par]++;
    }
    
    for(let com of completion){
        if(obj[com]) obj[com]--;
    }
    
    for(let key in obj){
        if(obj[key] > 0) return key;
    }
}