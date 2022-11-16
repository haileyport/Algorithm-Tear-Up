const input=require('fs').readFileSync('/dev/stdin').toString().trim().split(" ")

let num1 = Number(input[0])
let num2 =Number(input[1])

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

for(let j = num1 ; j<= num2 ; j++){
    if(isprime(j)){
      console.log(j)
    }
}
