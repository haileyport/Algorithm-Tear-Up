const input=require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")



const isprime = (num)=>{
    if(num<2){
        return false
    }
    for(let i =2; i<= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}

for(let k = 0 ; k< input.length-1; k++){
    let count = 0
    let n = Number(input[k])
    let input1 = n+1
    let input2 = 2*n
    
 for(let j = input1 ; j <= input2 ; j++){ //13. 26 
    if(isprime(j)){
      count++
    }
}
console.log(count)
}
