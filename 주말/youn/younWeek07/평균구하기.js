function solution(arr) {
    let avr = arr.reduce((acc, cur)=>{
        return acc+cur
    },0)
    
    return avr/arr.length
}