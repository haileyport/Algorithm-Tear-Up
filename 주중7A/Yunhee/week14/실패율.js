function solution(N, stages) {
    // 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열 return
    // 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다!
    const result = [];
    const arr = []; // "스테이지번호 실패율" 요소를 담는 배열
    
    for(let i = 1; i <= N; i++){
        // 스테이지에 도달한 플레이어
        let total = stages.filter(stage => stage >= i).length; 
        // 스테이지에 도달했지만 클리어하지 못한 플레이어
        let fail = stages.filter(stage => stage === i).length;
        
        arr.push(`${i} ${fail/total}`);
    }
    
    // 배열의 요소를 쪼개서 실패율로 내림차순 정렬을 한 다음 map으로 스테이지번호 숫자로 바꿔 반환한다.
    return arr.sort((a,b) => +b.split(" ")[1] - +a.split(" ")[1])
       .map(e => e.split(" ")[0]).map(Number);
}