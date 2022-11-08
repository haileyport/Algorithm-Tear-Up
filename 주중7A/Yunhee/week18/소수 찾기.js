const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
         
    return true;
}

function solution(numbers) {
    let answer = new Set(); 
    let nums = numbers.split(""); 
    
    const getPermutation = (arr, fixed) => {
        if(arr.length >= 1) {
            for (let i = 0; i < arr.length; i++) {
                //기존 고정값에 배열의 i번째 요소를 합쳐 새로운 고정값으로 지정
                const newFixed = fixed + arr[i]; 
                const copyArr = arr.slice();
                
                // newFixed로 고정한 요소를 배열에서 제거하여, 고정되지 않은 요소들로 배열을 채운다.
                copyArr.splice(i, 1); 
                
                // 도출된 조합이 answer에 들어있지 않고, 소수일 경우 answer에 추가하도록 하였다.
                if (!answer.has(parseInt(newFixed)) && isPrime(parseInt(newFixed))){
                    answer.add(parseInt(newFixed)) //newFixed 조합을 answer에 추가
                }
                
                // 고정되지 않은 요소들이 담긴 배열과, 새로운 고정값을 인자로 전달하여 getPermutation 호출.
                getPermutation(copyArr, newFixed); 
            }
        }
    }
    
    getPermutation(nums, "");
     
    return answer.size;
}