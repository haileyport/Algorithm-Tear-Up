function solution(s) {
    //     var answer = {};
    //     var arr = []
    //     var arr2 = []

    //     for( let i =0; i<s.length; i++){
    //        answer[s[i]] = s.charCodeAt(i)
    //         arr.push(s.charCodeAt(i))
    //     }
    //     var sortArr = arr.sort((a,b)=> b-a)

    //     for( let j = 0 ; j < arr.length; j++){
    //         Object.keys(answer).find(key => {
    //       if(answer[key] === arr[j]){     
    //         arr2.push(key)
    //       }
    //     })}
    //     return   arr2.join("")

    return s.split('').sort().reverse().join('')
    //맞아.. 문자열도 sort가 가능했지..
}
