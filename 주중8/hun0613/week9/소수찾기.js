function solution(n) {
    let answer = 0;
    
    // 소수 -> 에라토스테네스의 채로 걸러내자
    
    // n까지의 true로 구성된 배열생성 (0, 1은 소수가 아니니가 false로 해준다)
    // 원소가 true라면
    // 그 수의 제곱부터 시작해서 n까지의 배수를 false로 바꿔준다
    
    let arr = [...[false, false], ...Array(n - 1).fill(true)];
    
    for (let i = 2; i * i <= n; i++){
        if (arr[i]){
            for (let j = i * i; j <= n; j+=i){
                arr[j] = false;
            }
        }
    }
    
    // return arr;
    return arr.filter(el => el).length;
    
    

    
    
//     let arr = Array(n + 1).fill(true).fill(false, 0, 2);
//     for(let i = 2 ; i * i <= n; i++){
//         if(arr[i]){
//             for(let j = i * i; j <= n; j+=i){
//                 arr[j] = false;
//             }
//         }
//     }

//     return arr;

}