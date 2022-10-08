function solution(n, arr1, arr2) { 
  let answer = arr1.map((num, idx) => {
    let binary = (num | arr2[idx]).toString(2);
    if (binary.length < n) binary = binary.padStart(n, '0');

    let result = ''; 
    [...binary].forEach((bit) => {
         result += (bit === '1') ? '#' : ' '; 
    })

    return result;
  })

  return answer;
}
