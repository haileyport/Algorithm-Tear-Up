// function solution(arr) {
//     let arrFirst = [];
//     for(let i = arr[0]; i>=1; i--){
//         if(arr[0]%i === 0){
//             arrFirst.push(i)
//         }
//     }
    
//     let restArr = [...arr].slice(1);
//     let commonNum = 1;
//     console.log(arrFirst[0]);
//     function checkIsCommon(restArr,arrFirst){
//         if(arrFirst[0] === 1){
//             return commonNum;
//         }
        
//         for(let n of restArr){
//             if(n%arrFirst[0] !== 0){
//                 arrFirst.shift()
//                 return checkIsCommon(restArr,arrFirst);
//             }
//         }
//         commonNum = arrFirst[0];
//     }
    
//     let output = checkIsCommon(restArr,arrFirst);
//     console.log(commonNum);
//     if(commonNum === 1){
//         return arr.reduce((n,cur) => n*cur,1)
//     }
//     return arr.reduce((n,cur) => n*cur,1)/(commonNum*arr.length)
// }

// let re = solution([3,4,9,16]);
// console.log(re);

//접근을 잘못해서 모든 수에 공통된 공약수가 있을때만 가능하게 품...^^


function solution(arr){
    if(arr.length === 1){
        return arr[0];
    }
    function findCM( n , m){
        for(let i = n; i >= 1; i--){
            if(n%i === 0 && m%i === 0){
                return (n*m)/i;
            }
        }
    }
    let find = findCM(arr[0],arr[1])
    arr.push(find);
    let newArr = arr.slice(2)
    return solution(newArr)
}

let output = solution([3,4,9,16]);
console.log(output);


//35분동안 뻘짓하다가 15분만에 해결 ㅠㅠㅋㅋ
//10점
