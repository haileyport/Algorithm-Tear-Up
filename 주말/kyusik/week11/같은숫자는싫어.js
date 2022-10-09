// function solution(arr)
// {
//     var answer = [];
//     // arr 의 첫번째 요소 shift
//     // answer의 마지막 요소와 비교 후 일치하지 않으면 push
//     // arr의 길이가 0이 될 때까지 반복
//     while(arr.length !== 0){
//         if(answer[answer.length - 1] !== arr[0]){
//             answer.push(arr.shift());
//         } else {
//             arr.shift();
//         }
//     }
//     //console.log(answer);
//     return answer;
// }
function solution(arr) {
    return arr.filter((element, index) => element !== arr[index + 1]);
  }