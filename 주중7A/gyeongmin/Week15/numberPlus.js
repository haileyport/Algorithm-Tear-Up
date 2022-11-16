function solution(numbers) {
    var answer = 0;
    let arr = [1,2,3,4,5,6,7,8,9]
    let filterNum = arr.filter(el=> !numbers.includes(el))
    console.log(filterNum)
    answer = filterNum.reduce((pre,cur)=>pre+cur)
    return answer;
}
