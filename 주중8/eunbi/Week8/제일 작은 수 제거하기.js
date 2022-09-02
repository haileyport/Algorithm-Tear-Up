// [PGS] 제일 작은 수 제거하기 
// 소요시간 : 8분 20초 

function solution(arr) {
    let min = Math.min(...arr);
    // if(!arr.length) return -1;
    if(arr[0] === 10 || !arr.length) return [-1];
    else {
        arr.splice(arr.indexOf(min),1);
        return arr;
    }
}
