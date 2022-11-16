function toBinaryArr(n, arr){
  return arr.map((el) => {
      const binaryNum = el.toString(2)
      return binaryNum.length < n ? 
          `${'0'.repeat(n - binaryNum.length)}${el.toString(2)}`.split('').map(Number)
          : el.toString(2).split('').map(Number)
  })
}

function solution(n, arr1, arr2) {
  const binaryArr1 = toBinaryArr(n, arr1)
  const binaryArr2 = toBinaryArr(n, arr2)
  
  const binarySumArr = []
  for(let i = 0; i < n; i++){
      binarySumArr.push([])
      for(let j = 0; j < n; j++){
          binaryArr1[i][j] + binaryArr2[i][j] ? binarySumArr[i].push("#") : binarySumArr[i].push(' ')
      }
  }
  
  return binarySumArr.map((el) => el.join(''))
}