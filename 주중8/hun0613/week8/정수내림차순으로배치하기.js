function solution(n) {
    let answer = [];
    let arr = n.toString().split('').map(el => Number(el));
    
    // let largest = arr[arr.length - 1];
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1 -i; j++){
            if (arr[j] < arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    
    
    return Number(arr.join(''));
}