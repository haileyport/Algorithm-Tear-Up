function solution(strings, n) {
    //     strings = strings.sort()
    //     let arr = []
    //     let object = {}
    //     for ( let i = 0; i < strings.length; i++){
    //         arr.push(strings[i].slice(n))
    //         object[strings[i]] = strings[i].slice(n)
    //     }

    //     arr = arr.sort()
    //     let result = []
    //   for(let i=0; i< arr.length ;i++){
    //     Object.keys(object).find(key => {
    //       if(object[key] === arr[i]){     
    //         result.push(key)
    //       }
    //     })}

    //       return result
    // 틀린 문제풀이 문자열이 같을 때 전체의 문자열의 sort를 해줘야하 하는것인데 불가능하다.

    strings.sort((a, b) => {
        if (a[n] < b[n]) { return -1; }
        else if (a[n] > b[n]) { return 1; }
        else if (a < b) { return -1; }
        else if (a > b) { return 1; }
        return 0
    })
    return strings


}
