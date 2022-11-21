function solution(k, dungeons) {
    const max = dungeons.length;
    let explored = new Array(max).fill(false);
    let answer = 0;

    function explore(HP, count) {
        answer = Math.max(count, answer);
        
        for(let i = 0; i < max; i++) {
            const [required, using] = dungeons[i];
            
            if (HP >= required && !explored[i]) {
                explored[i] = true;
                explore(HP - using, count + 1);
                explored[i] = false;
            }
        }
    }
    explore(k, 0);    
    return answer;
}
