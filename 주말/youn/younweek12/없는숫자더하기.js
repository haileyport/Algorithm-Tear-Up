function solution(numbers) {
    let nums =[0,1,2,3,4,5,6,7,8,9]
  
    let dums = numbers.reduce((acc, cur)=> acc +cur)
    console.log(dums)
    
    let result = 45 - dums
    return result
  }
  