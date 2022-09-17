function solution(n, arr1, arr2) {
  // 정답
  // let ans = [];
  // for (let i = 0 ; i < n ; i++){
  //     let a = arr1[i] | arr2[i];
  //     let b = "0000000000000000" + a.toString(2);
  //     let cut = b.slice(-n);
  //     console.log(cut);
  //     let inst = [];
  //     for (let comp of cut){
  //         if (comp == '0'){
  //             inst += ' '
  //         }else{
  //             inst += '#'
  //         }
  //     }
  //     // console.log(inst);
  //     ans.push(inst);
  // }
  // return ans;
  
  // 다른 것
  let arr3 = [];
  let arr4 = [];
  let ans = [];
  for(let i of arr1){
      let a = "0000000000000000" + i.toString(2)
      let cut = a.slice(-n)
      arr3.push(cut);
  }
  for(let i of arr2){
      let a2 = "0000000000000000" + i.toString(2)
      let cut2 = a2.slice(-n)
      arr4.push(cut2);
  }
  // console.log(arr3);
  // console.log(arr4);
  for(let b = 0 ; b < n ; b++){
      let plus = "0000000000000000" + (String(Number(arr3[b]) + Number(arr4[b])))
      let plus2 = plus.slice(-n)
      let inst = '';
      for (let c of plus2){
          if (c == '0'){
              inst += ' ';
          }
          else{
              inst += '#'
          }   
      }
      console.log(inst);
      ans.push(inst);
  }
  console.log(ans);
  return ans;
}