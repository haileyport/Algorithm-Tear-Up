function solution(absolutes, signs) {
    return absolutes.map((e, idx) => signs[idx] ? e : -e ).reduce((acc, cur) => acc + cur);
}