function solution(s) {
    s = s.toLowerCase()
    var answer = s.split(" ").map(s => {
        let arr = s.split("")
        console.log(arr)
        // let s1 = '  apple     a1 '
        // let arr1 = s1.split(' ')
        // let arr2 = arr1.split('')
        // console.log(arr2);
        if(arr[0] !== undefined){
           arr[0] = arr[0].toUpperCase(); 
        }
           
        return arr.join('');
    }).join(' ');

    return answer;
}