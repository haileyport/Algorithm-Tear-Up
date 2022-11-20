function solution(k, dungeons) {
    const length = dungeons.length;
    const visited = Array(length).fill(false);
    let answer = 0;
    let temp = 0;

    const dfs = (currentK, cnt) => {
        for (let i = 0; i < length; i++) {
            if (!visited[i] && currentK >= dungeons[i][0]) {
                visited[i] = true;
                dfs(currentK - dungeons[i][1], cnt + 1);
                visited[i] = false;
            }
        }
        answer = Math.max(answer, cnt);
        return;
    }

    dfs(k, 0);

    return answer;
}
