function solution(array, commands) {
    var answer = [];
    for( let x = 0; x< commands.length; x++){
        const [i, j , k] = commands[x]
        i=== j ? answer.push(array.slice(i-1,j)[0]) :
         answer.push(array.slice(i-1,j).sort((a,b)=>a-b)[k-1])
    
    }
    return answer;
}

// function solution(array, commands) {
//     var answer = [];
//     let a 
//     for( let x = 0; x< commands.length; x++){
//         const [i, j , k] = commands[x]
//     if(i=== j ){
//         a = array.slice(i-1,j)
//         answer.push(a[0])
//     }else{
//         a = array.slice(i-1,j)
//         a = a.sort((a,b)=>a-b)
//          answer.push(a[k-1])
    
//     }
//     return answer;
// }


