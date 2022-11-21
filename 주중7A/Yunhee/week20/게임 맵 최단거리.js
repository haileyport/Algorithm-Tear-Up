function solution(maps) {
    // 상대 팀 진영
    const row = maps.length - 1
    const col = maps[0].length - 1;
    
    // 상 우 하 좌
    const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    // 사용이 가능한 길인지 확인하는 함수
    const isRoad = (nextY, nextX, row, col) => nextY < 0 || nextX < 0 || nextY > row || nextX > col;
    
    // 시작 위치 y, x, 누적 이동 거리
    const queue = [[0, 0, 1]];

    while(queue.length) {
        let [y, x, count] = queue.shift();
        
        // 상대 팀 진영에 도착했다면 누적 거리를 리턴!
        if(y === row && x === col) return count;
        
        // 동서남북 가는 경우를 다 확인해보기
        for(let i = 0; i < direction.length; i++) {
            const [dy, dx] = direction[i];
            const nextY = dy + y
            const nextX = dx + x;
            
            // 맵 밖으로 나간다면
            if(isRoad(nextY, nextX, row, col)) continue;
            
            // 도착한 곳이 벽이라면
            if(maps[nextY][nextX] === 0) continue;
            
            // 이미 지난 곳을 벽으로 만들어서 다음에 못오도록!
            maps[nextY][nextX] = 0;
            
            // 다음에 확인해야하는 곳 큐에 추가
            queue.push([nextY, nextX, count + 1]);
        }
    }

    return -1;
}