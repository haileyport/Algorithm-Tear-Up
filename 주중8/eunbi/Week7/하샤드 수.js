// [프로그래머스] 하샤드 수/ 8분 17초 

// 전에 풀었던 방법 
// function solution(x){
//   let answer;
//   let strX = String(x);
//   let total = 0;

//   for(let i = 0; i < strX.length; i++){
//     total += Number(strX[i]);
//   }

//   return  x % total === 0 ? true : false ;

// }

//이번에 푼 방법(더 느리다;;) 
function solution(x) {
  let  answer = true;
    
  let arr = String(x).split('');
  let sum = 0; 
  arr.forEach(el => sum += parseInt(el));
  
  if(x % sum !== 0) answer = false; 
  
  return answer;
}