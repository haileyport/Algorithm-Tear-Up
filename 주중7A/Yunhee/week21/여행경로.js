function solution(tickets) {
    let routes = [];

    // extra(잔여티켓): [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]
    // current(현재위치): "ICN"
    // route(여행경로): ["ICN"]
    function DFS(extra, current, route){
        //잔여티켓 연산이 끝나면 routes로 정보전송
        if (extra.length === 0) {
            routes.push(route); 
        } else {
            extra.forEach(([start, end], index) => {
                if (current === start) {
                    const newExtra = extra.slice();
                    newExtra.splice(index, 1); //사용했던 티켓은 빼버린다.
                    
                    //남은 잔여티켓, 새목적지를 입력해서 재호출 
                    DFS(newExtra, end, route.concat(end));
                }
            });
        }
    };
    
    DFS(tickets, 'ICN', ['ICN']);
    
    return routes.sort()[0];
}