function solution(people, limit) { 
    people.sort((a, b) => a - b); 

    let answer = 0;
    let light = 0; 
    let heavy = people.length - 1; 
	    
    while (heavy >= light) {  
        if (people[light] + people[heavy] <= limit) light++; 
        answer++;
        heavy--;
    }
    return answer;
}
