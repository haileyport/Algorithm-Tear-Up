function solution(strings, n) {
    strings.sort((a,b)=>{
    return (a[n] === b[n]) ? a.localeCompare(b) : a[n].localeCompare(b[n])
    })
    return strings
}
