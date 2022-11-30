function solution(numbers) {
    const zeroToNine = [0,1,2,3,4,5,6,7,8,9]
    let filteredArr = zeroToNine.filter((el) => {
        return !numbers.includes(el);
    })
    
    return filteredArr.reduce((acc, cur) => acc + cur, 0);
}