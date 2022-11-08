//[PGS] 숫자 문자열과 영단어, +1

// 테스트 1 〉	통과 (0.08ms, 33.4MB)
// 테스트 2 〉	통과 (0.08ms, 33.5MB)
// 테스트 3 〉	통과 (0.12ms, 33.5MB)
// 테스트 4 〉	통과 (0.08ms, 33.4MB)
// 테스트 5 〉	통과 (0.08ms, 33.5MB)
// 테스트 6 〉	통과 (0.22ms, 33.5MB)
// 테스트 7 〉	통과 (0.08ms, 33.5MB)
// 테스트 8 〉	통과 (0.16ms, 33.5MB)
// 테스트 9 〉	통과 (0.18ms, 33.4MB)
// 테스트 10 〉	통과 (0.07ms, 33.4MB)

function solution(s) {
  const alphabet = {
      "zero": 0,
      "one" : 1,
      "two" : 2,
      "three" : 3,
      "four" : 4,
      "five" : 5,
      "six" : 6,
      "seven" : 7,
      "eight" : 8,
      "nine" : 9
  };
   
  let result = '';
  let temp = '';
   
   if(!isNaN(s)) return Number(s);
       
   for(let i = 0; i < s.length; i++){
       if(!isNaN(s[i])){
           if(temp.length === 0){
               result += s[i];
           }else {
               result += alphabet[temp] + s[i];   
           }
           temp = '';
       }else {
           if(alphabet.hasOwnProperty(temp)){
            result += alphabet[temp];
           temp = s[i];
           }else{
               temp += s[i]; 
           }
       }
   }
  
   
   
   if(temp.length !== 0){
       result += alphabet[temp];
   }

   return Number(result)
}