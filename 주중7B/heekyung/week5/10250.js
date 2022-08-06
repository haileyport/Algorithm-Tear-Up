const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

// W / H )>ㅊㅡㅇㅅㅜ // W % H  >  ㅎㅗㅅㅜ
const TestCase = input.shift()
let numsecond 
const arr = input.map(el=>{
	let splitarr = el.split(' ')
 	let H =Number(splitarr[0])
 	let N =Number(splitarr[2])
 	let second = Math.ceil(N / H)
 	let first = N % H
 		
 	if(second < 10){
 		numsecond = `0${second}`
 	} else {numsecond = second}
 	let result = String(first)+String(numsecond)
 	
 	return console.log(result)
 })
//오ㅐ틀렸지?
