const bfs = (start, visited, linkInfo) => {
    const queue = [start];
    let cnt = 0;
    while(queue.length !== 0) {
        const current = queue.shift();
        visited[current] = true;
        linkInfo[current].forEach(x => {
            if(!visited[x]) {
                queue.push(x);
            }
        })
        cnt++;
    }
    return cnt;
}
const calcMinDifference = (n, linkInfo) => {
    const startLocation = [1];
    const startVisited = Array(n + 1).fill(false);
    let minDifference = 101;

    while(startLocation.length !== 0) {
        const currentLocation = startLocation.shift();
        const nextVisit = [...linkInfo[currentLocation].filter(x => !startVisited[x])];
        startVisited[currentLocation] = true;
        startLocation.push(...nextVisit);

        nextVisit.forEach(x => {
            const visited = [...startVisited];
            const cnt = bfs(x, visited, linkInfo);
            minDifference = Math.min(minDifference, Math.abs(n - (2 * cnt)));
        })
    }

    return minDifference;
}
