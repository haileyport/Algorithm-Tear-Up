function solution(X, Y) {
    var answer = '';
    let arr = []
    X = [...X]
    Y = [...Y]

    for (let i = 0; i < 10; i++) {
        const X_cnt = X.filter((item) => +item === i).length; //2 
        const Y_cnt = Y.filter((item) => +item === i).length; //3
        answer += i.toString().repeat(Math.min(X_cnt, Y_cnt)); //00111

    }

    let sortArr = [...answer].sort().reverse() //00111 -> 11100
    if (answer === "") {
        return "-1";
    } else if (sortArr[0] === '0') {
        return '0'
    } else {
        return sortArr.join("")
    }






    //     while(X.length !== 0){
    //         let num = X.pop()
    //         if(Y.indexOf(num)!== -1){
    //             arr.push(Y[Y.indexOf(num)] )
    //             Y.splice(Y.indexOf(num),1)
    // }

    // }
    //     if(arr.length === 0) return '-1'

    //          return arr.sort().reverse().join('')


}                                                                                                                                                                 
