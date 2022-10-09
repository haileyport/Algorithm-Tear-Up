function solution(absolutes, signs) {
    
    const pm = signs.map((el) => {
        return (el === true ? 1 : -1)
    })

    return absolutes.reduce((acc, cur, idx) => {
        return acc + cur * pm[idx]
    }, 0);
}