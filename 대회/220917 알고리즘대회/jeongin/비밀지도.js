function toBinary(arr, result) {
  arr.forEach(n => result.push(n.toString(2)));
}

function padding(arr, lenMax) {
 arr.forEach((n, idx) => {
      if (n.length < lenMax) arr[idx] = n.padStart(lenMax, '0');
  })
}

function solution(n, arr1, arr2) {
  let answer = [];
  
  let arr1Binary = [];
  toBinary(arr1, arr1Binary);
  let arr2Binary = []
  toBinary(arr2, arr2Binary);
  
  let lenMax = Math.max(...(arr1Binary.map(n => n.length)))
  padding(arr1Binary, lenMax);
  padding(arr2Binary, lenMax);
  
  for (let i = 0; i < arr1Binary.length; i++) {
      let resolved = '';
      let str1 = arr1Binary[i]; 
      let str2 = arr2Binary[i]; 

      for (let i = 0; i < str1.length; i++) {
          resolved += (str1[i] === '1' || str2[i] === '1') ? '#' : ' '
      }
      answer.push(resolved)
  }    
  return answer;
}