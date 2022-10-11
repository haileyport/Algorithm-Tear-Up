function solution(numbers) {
  let dict = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  for(let i = 0; i < numbers.length; i ++){
    if(dict.includes(numbers[i])){
      let spot = dict.indexOf(numbers[i])
      dict.splice(spot, 1)
    }
  }
  return dict.reduce((a, b) => a + b)
}