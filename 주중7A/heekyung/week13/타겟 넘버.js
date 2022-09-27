function solution(numbers, target) {
    var answer = 0;
    dfs(0, 0)
    function dfs(level, sum) {
        if (level === numbers.length) {
            if (sum === target) {
                answer += 1
            }
            return
        }
        dfs(level + 1, sum + numbers[level]);
        dfs(level + 1, sum - numbers[level]);
    }
    return answer;
}
//dfs를 사용해서 재귀문 이용해서 문제를 풀이한다.