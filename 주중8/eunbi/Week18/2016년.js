//[PGS] 2016년, +3 
// 8월부터 홀짝 바뀜... 8월은 31일까지 있다...

// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.08ms, 33.5MB)
// 테스트 3 〉	통과 (0.08ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.4MB)
// 테스트 5 〉	통과 (0.08ms, 33.4MB)
// 테스트 6 〉	통과 (0.08ms, 33.5MB)
// 테스트 7 〉	통과 (0.06ms, 33.5MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.06ms, 33.4MB)
// 테스트 10 〉	통과 (0.06ms, 33.4MB)
// 테스트 11 〉	통과 (0.06ms, 33.4MB)
// 테스트 12 〉	통과 (0.09ms, 33.5MB)
// 테스트 13 〉	통과 (0.06ms, 33.6MB)
// 테스트 14 〉	통과 (0.06ms, 33.5MB)

function solution(a, b) {
  let thirtyone = [1,3,5,7,8,10,12];
  let thirty = [4,6,9,11];
  
  let week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  let day = 5; 
  
  for(let i = 1; i < a; i++){
      if(thirtyone.includes(i)){
          day += 3;
          day >= 7 ? day = day - 7 : day ;
      }else if(thirty.includes(i)){
          day += 2;
          day >= 7 ? day = day - 7 : day ;
      }else {
          day += 1;
          day >= 7 ? day = day - 7 : day ;
      }
  }

//     for(let i = 1; i < a; i++){
//         if(){// 홀수
//             day += 3;
//             day >= 7 ? day = day - 7 : day ;
//             console.log(i, day)
          
//         }else if(i !== 2 && i % 2 === 0 ){ //2월이 아니면서 짝수
//             day += 2;
//             day >= 7 ? day = day - 7 : day ;
//             console.log(i, day)
          
//         }else if(i === 2){
//             day += 1;
//             day >= 7 ? day = day - 7 : day ;
//             console.log(i, day)
//         }
//     }
  
//     day += (b % 7) -1;
      day = (day + b) % 7 - 1; 
      
  
  return day < 0 ? week[6]: week[day];

  
}