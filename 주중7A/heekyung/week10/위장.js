function solution(clothes) {
    var answer = 0;

    let object = {}


    for (let i = 0; i < clothes.length; i++) {

        object[clothes[i][1]] += `${clothes[i][0]},`

    }

    for (let j in object) {
        object[j] = object[j].slice(0, -1)
        object[j] = object[j].split(',')
        object[j] = object[j].length
        // if( j === clothes[i][1]){

    }
    let sum = 1
    for (let x in object) {
        object[x] = object[x] + 1
        sum *= object[x]
    }


    //     }
    return sum - 1;
}
