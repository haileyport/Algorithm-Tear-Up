function solution(arr){
  let arr2 = [];
  arr2.push(arr[0])
  let count = 0;
  // console.log(arr.length);
  for(let i = 1 ; i < arr.length; i++){
      if(arr[i] == arr2[count]){
          let a = 1;
      }else{
          arr2.push(arr[i]);
          count += 1;
      }
  }
  return arr2;
}