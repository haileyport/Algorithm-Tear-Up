// function solution(brown, yellow) {

//   let result=[]
//   for(let i =1; i <= yellow; i++){
//     if(yellow % i === 0 ){
//       result.push(i)
//     }
//   }

//   if(result.length === 1){
//     return [3,3]
//   }else{
//       let num1 = result.slice((result.length-1)/2 ,(result.length-1)/2 +2)

//   const [num2,num3]= num1
//   return [num3+2, num2+2]
//   }
// }

function solution(brown, yellow) {
  var answer = [];
  let sum = brown + yellow;

  //카펫의 최소높이는 3부터이다.(위아래 갈색, 가운데가 노란색이기 때문에)
  //높이는 최소3이상
  for (let height = 3; height <= brown; height++) {
    if (sum % height === 0) {
      //가로길이
      let weight = sum / height;

      //테두리를 제외한 길이를 구해야하기 때문에 각각 -2해준뒤 곱셈
      //결과가 yellow와 같다면 해당 높이와 길이 리턴
      if ((height - 2) * (weight - 2) === yellow) {
        return [weight, height];
      }
    }
  }
  return answer;
}
