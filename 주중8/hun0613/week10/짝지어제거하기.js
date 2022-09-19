function solution(s)
{
//     var answer = -1;

//     // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
//     console.log('Hello Javascript')

//     return answer;
    
    // 문자열에서 같은 알파벳이 2개 붙어있는 짝을 찾는다.
    // 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어붙힌다.
//     let initialArr = s.split('');
//     let answer = 1;
//     let isPossible = 0;
    
//     if (s.length === 0){
//         return 0;
//     }
    
    
//     const removeMachine = (arr) => {
//         if (arr.length === 0){
//             return 1;
//         }
        
    
        
    
//         for (let i = 0; i < arr.length - 1; i++){
//             if (arr[i] === arr[i+1]){
//                 arr.splice(i,2);
//                 return answer * removeMachine(arr)
//             }
//         }
        
//         return isPossible;
//     }
    
//     return removeMachine(initialArr);
    

    let stack = [];
    for(let i=0; i < s.length; i++){
        if (stack[stack.length - 1] === s[i]){
            stack.pop();
        }else{
            stack.push(s[i])
        }
    }
    
    return stack.length ? 0 : 1;


}