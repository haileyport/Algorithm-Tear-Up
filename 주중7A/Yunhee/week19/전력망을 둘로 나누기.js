// start 노드와 연결된 노드 개수 리턴
const bfs = (start, visited, linkInfo) => {
    const queue = [start];
    let cnt = 0;

    while(queue.length !== 0) {
        const current = queue.shift();
        // 방문 표시
        visited[current] = true;
        // 현재 노드와 연결된 노드들 검사
        linkInfo[current].forEach(x => {
            // 아직 방문하지 않았다면 큐에 추가
            if(!visited[x]) {
                queue.push(x);
            }
        })
        cnt++;
    }

    // 연결된 노드 개수 리턴
    return cnt;
}

// 송전탑 개수 최소 차이 구함
const calcMinDifference = (n, linkInfo) => {
    // 전선을 끊을 시작점들을 저장하는 배열
    const startLocation = [1]; // 1번 노드에 연결된 전선을 끊겠다는 뜻
    // 시작점 방문 표시할 배열
    const startVisited = Array(n + 1).fill(false);
    let minDifference = 101;

    while(startLocation.length !== 0) {
        // 현재 위치
        const currentLocation = startLocation.shift();
        // 현재 위치와 연결된 노드들을 nextVisit에 저장
        // !! 이미 방문한 시작점은 제외
        const nextVisit = [...linkInfo[currentLocation].filter(x => !startVisited[x])];
        // 현재 위치 방문 표시
        startVisited[currentLocation] = true;
        // 시작점 배열에 연결된 노드들 넣어줌
        startLocation.push(...nextVisit);
        
        nextVisit.forEach(x => {
            // bfs에 사용할 방문 표시 배열, 매번 갱신해줌
            // 이미 방문한 시작점은 방문 안할 거니까
            const visited = [...startVisited];

            // x노드와 연결된 노드 개수
            const cnt = bfs(x, visited, linkInfo);
            // 최소 차이 갱신
            minDifference = Math.min(minDifference, Math.abs(n - (2 * cnt)));
        })
    }

    return minDifference;
}

const solution = (n, wires) => {
    // 전선 간 연결 정보 저장할 이차원 배열
    // linkInfo[1] = [3], linkInfo[3] = [1, 2, 4]
    const linkInfo = Array.from(Array(n + 1), () => Array().fill([]))
    let answer = 0;

    wires.forEach(wire => {
        const [start, end] = wire;
        // 양방향 연결
        linkInfo[start].push(end);
        linkInfo[end].push(start);
    })

    answer = calcMinDifference(n, linkInfo);

    return answer;
}