function solution(s) {
    let str = s.toLowerCase()
    let pLength = str.match(/\p/g)?.length
    let yLength = str.match(/\y/g)?.length
    return pLength === yLength
}
