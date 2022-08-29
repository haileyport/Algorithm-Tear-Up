function solution(arr) {
    var answer = [];
    if(arr.length === 0 || arr.length === 1){
        return [-1];
    }
    let smallestNumber = arr[0];
    for(let n of arr){
        if(n < smallestNumber){
            smallestNumber = n;
        }
    }
    answer = arr.filter(el => el !== smallestNumber)
    return answer;
}

//15분 내
