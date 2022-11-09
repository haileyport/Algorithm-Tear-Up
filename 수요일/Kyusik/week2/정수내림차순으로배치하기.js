function solution(n) {
    let nArr = n.toString().split('');
    nArr.sort((a, b) => b - a);
    return parseInt(nArr.join(''));
}