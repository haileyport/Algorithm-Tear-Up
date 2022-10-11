function solution(arr) {
    let minNum = arr[0];
     if(arr.length === 1){
         return [-1]
     }
     
     for(let i=1; i<arr.length; i++){
         if(arr[i] < minNum){
             minNum = arr[i]
         }
     }
  let result = arr.filter(el => 
     el !== minNum)
  
  
  return result
 }