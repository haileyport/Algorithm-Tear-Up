const input =require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

let test = Number(input.shift())//5


let arr=[]
for(let i =0 ; i< test; i++){
    arr.push(input[i].split(' ').map(v=> Number(v)))
}


let rank = []
for (let i = 0; i < test; i++) {
        let counter = 0;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
            if (
                arr[i][0] < arr[j][0] &&
                arr[i][1] < arr[j][1]
                 ){
                counter++;
                }
  }
}
rank.push(counter + 1);
}
 
console.log(rank.join(' '));