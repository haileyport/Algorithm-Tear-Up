function solution(people, limit) {
    // 한 번에 최대 2명, 무게 제한 limit
    // 모든 사람을 구출하기 위해 필요한 구명보트의 개수 최솟값 반환
    let count = 0;
    let l = 0;
    let r = people.length - 1;
    
    // 몸무게를 내림차순한다.
    people = people.sort((a,b) => b - a);
    
    while(l <= r){
        // 큰 몸무게와 작은 몸무게를 더한다.
        let sum = people[l] + people[r];
        
        // 더한 값이 제한 무게보다 크다면 첫번째 수만 배에 태우니까 l에 1을 더한다.
        if(sum > limit){
            l++;
        }
        // 작다면 첫번째 수, 마지막 수 둘 다 배에 태우니까 각각 1을 더하고 빼준다.
        else{
            l++;
            r--;
        }
        
        count++;
    }
    
    return count;
}