function solution(numbers) {
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return numArr.filter(e => !numbers.includes(e)).reduce((acc, cur) => acc + cur);
}