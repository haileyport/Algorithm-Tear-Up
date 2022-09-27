function solution(s) {
    let arr = s.split(' ').sort(function(a,b) {return a-b})
    return `${arr[0]} ${arr[arr.length-1]}`
}

//2점 