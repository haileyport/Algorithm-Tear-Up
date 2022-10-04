function solution(participant, completion) { 
    let map = new Map();
    participant.map(name => {  
        (map.has(name)) ? map.set(name, map.get(name) - 1) : map.set(name, 0);
    })
    
    completion.map(name => map.set(name, map.get(name) + 1));
    
    let answer;
    for ( let item of map ) {
        if (item[1] !== 1) answer = item[0]
    } 
    
    return answer
}
