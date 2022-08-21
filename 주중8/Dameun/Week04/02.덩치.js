let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let arr = []
let arrValue = input.slice(1);

for(let n of arrValue){
    let arrV = n.trim().split(' ');
    arr.push(arrV.map(Number))
}
//위까지 코드가 숫자로 바꿔서 각 학생의 몸무게, 키를 담은 배열로 만들기 
// 자기보다 키와 몸무게가 둘 다 큰 인덱스를 만나면, 등수 +1을 한다.


const findRanking = function(arr){
    let finalNumber = ''
    let weight = [];
    let hight = [];
    for(let n of arr){
        weight.push(n[0]);
        hight.push(n[1]);
    }
    //각각 키와 몸무게만 담은 함수
    for(let i=0; i<weight.length; i++){
        let rank = 1;
        for(let n=0; n<weight.length; n++){
            if(i !== n ){
                if(weight[i] < weight[n] && hight[i] < hight[n]){
                    rank++
                    //만약 몸무게가 자기보다 무거운 사람이 키도 크다면 랭킹을 +1한다
                }
            }
        }
        finalNumber = finalNumber + `${rank} `
    }
    return finalNumber
}

console.log(findRanking(arr));

//9356KB
//124ms