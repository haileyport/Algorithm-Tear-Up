function solution(x) {
    let numArr = String(x).split('');
    numArr = numArr.map(el => Number(el));
    const sum = numArr.reduce((acc, cur) => acc + cur, 0);
    return x % sum === 0 ? true : false
}