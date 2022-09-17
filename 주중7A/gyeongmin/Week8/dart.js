function solution(dartResult) {
    let answer = 0;
    //S = 1, D = 2, T = 3
    //arr에 slice해서 넣어주기
    let arr = []
    let start = 0;
    for(let i = 0; i < dartResult.length; i++){
        if(dartResult[i] === "S" || dartResult[i] === "D" || dartResult[i] === "T" || dartResult[i] === "#" || dartResult[i] === "*"){
        arr.push(dartResult.slice(start, i+1))
            start = i + 1;
        }
    }
    //console.log(arr) //[ '1S', '2D', '*', '3T' ]
    //arr 배열을 돌면서 Math.pow(x, y)해서 제곱해주기
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== '*' || arr[i] !== '#'){
            let num = Number(arr[i].slice(0,arr[i].length-1))
            //console.log(num)
            if(arr[i][arr[i].length-1] === 'S') arr[i] = Math.pow(num, 1)
            if(arr[i][arr[i].length-1] === 'D') arr[i] = Math.pow(num, 2)
            if(arr[i][arr[i].length-1] === 'T') arr[i] = Math.pow(num, 3)
        }
    }
    //console.log(arr) //	[ 1, 4, '*', 27 ]
    for(let i = 0; i < arr.length; i++){
        //*이 첫번째에 나오면 첫번째 점수만 2배
        //*이 들어오면 해당 점수와 그 이전 점수 두개를 2배수
        if(arr[i] === '*'){
            arr[i-1] *=  2;
            if(!Number.isInteger(arr[i-2])){ //정수인지 확인
                arr[i-3] *= 2;
            } else{
                arr[i-2] *= 2;
            }
        //#이 들어오면 -1 곱해주기
        }else if(arr[i] ==='#'){
            arr[i-1] = arr[i-1] * (-1)
        }
    }    
    console.log(arr)
    arr.forEach(ele =>{
        if(Number.isInteger(ele))
        answer += ele
    })
    //*과 #이 중첩될 경우엔 -2배
    
    return answer
}
