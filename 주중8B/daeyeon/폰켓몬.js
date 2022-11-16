/* 10분 100 100 */

function solution(nums) {
    // 중복제거전 배열의 길이 N
    // 중복제거한 배열의 길이 M
    //      N/2는 가질수 있는 최댓값 
    //      M은 최댓값 N 최솟값 1
    //          따라서 범위는        1<= X <= N/2
    //              N/2보다 크면 N/2를 return해야하고
    //              N/2보다 작으면 M을 return해야함.
    //                  결국 N/2나 M중 작은수를 리턴하면 됨
    
    //set은 객체로 리턴되어서 배열형태로 바꿈
    return Math.min(nums.length/2,[...new Set(nums)].length);
    
}