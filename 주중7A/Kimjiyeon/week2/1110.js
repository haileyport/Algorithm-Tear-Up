let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const num = input;
let newnum = '';
let sumnum = '';
let count = 0;

if(Number(num)<10){
    
    sumnum = "0"+num;
    newnum = num+sumnum[1];
    count += 1;
}else{
    sumnum = Number(num[0])+Number(num[1]);
    sumnum = String(sumnum);

    if(Number(sumnum)<10){
        sumnum = "0"+sumnum
    }
    newnum = num[1]+sumnum[1];
    count +=1;

}

while(Number(num)!==Number(newnum)){
    
    sumnum = Number(newnum[0])+Number(newnum[1]);
    sumnum = String(sumnum);
    
    if(sumnum<10){
        sumnum = "0"+sumnum;
    }
    newnum = String(newnum[1])+String(sumnum[1]);

    count++;
}
console.log(count);