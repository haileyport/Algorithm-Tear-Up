const input =  require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number)

let Maxnum = 0;
let Maxidx = 0;

input.forEach((a, idx)=> {
	if ( a > Maxnum) {
		Maxnum = a;
		Maxidx = idx;
	}
})
console.log( `${Maxnum}
${Maxidx+1}`)
