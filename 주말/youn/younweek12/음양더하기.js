function solution(absolutes, signs) {
    let i =0
    let result=[]
    while(absolutes.length > 0){
      if(signs[i] === false){
        result.push(-absolutes[i])
      }else{
        result.push(absolutes[i])
      }
      
      absolutes.shift()
      signs.shift()
      
      
      
    }
  console.log(result)
  let sum = result.reduce((acc,cur)=> acc+cur)
  return sum
}