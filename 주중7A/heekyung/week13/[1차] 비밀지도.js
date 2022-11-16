function solution(n, arr1, arr2) {
    var answer = [];
    //47분
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(new Array(n).fill(0));
    }

    let list = []
    let list1 = []
    for (let j = 0; j < arr1.length; j++) {
        let arr1List = arr1[j].toString(2)
        let arr2List = arr2[j].toString(2)

        while (arr1List.length !== n) {
            let plus = '0'
            arr1List = plus.concat(arr1List)

        }
        while (arr2List.length !== n) {
            let plus = '0'
            arr2List = plus.concat(arr2List)
        }
        list.push(arr1List);
        list1.push(arr2List)
    }

    for (let x = 0; x < list.length; x++) {
        for (let y = 0; y < list[x].length; y++) {
            if (list[x][y] === '0' && list1[x][y] === '0') {
                arr[x][y] = ' '
            } else {
                arr[x][y] = '#'
            }
        }
        arr[x].join('')
    }
    console.log(list, list1)
    return arr.map(el => el.join(''));
}
