// 메모리 : 12460KB
// 시간 : 304ms


let arr = [];

function makeAdd(num){
    num = num.toString();
    let sum = Number(num);

    for(let i = 0; i < num.length; i++){
        sum = sum + Number(num[i])
    }
    return sum;
}


for(let i = 1; i <= 10000; i++){
    arr.push(makeAdd(i))

    if(!arr.includes(i)){
        console.log(i);
    }
}