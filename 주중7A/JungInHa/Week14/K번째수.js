function solution(array, commands) {
    var answer = commands.map(el => {
        const [i, j, k] = el;
        const newArr = array.slice(i - 1, j).sort((a, b) => a - b);
        return(newArr[k-1]);
    })
    return answer;
}
