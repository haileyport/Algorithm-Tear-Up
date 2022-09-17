function solution(board, skill) {
    
    for (let x = 0; x<skill.length; x++){
    let [type, firstX, firstY,lastX,lastY,degree] = skill[x]
        if( type === 1 ){
            //공격
            //r => 행 => 가로방향
            //c => 열 => 세로방향
            for(let w = firstX; w <= lastX; w++){
                for( let z = firstY; z <= lastY; z++){
                    // boardObject[[w,z]] -= degree
                    for(let q = 0;  q < board.length; q++){
                        
                        if ( w === q) {
                             for(let p = 0; p < board[q].length; p++){
                                if(z === p ){
                                    board[q][p] -= degree
                                }
                            }
                        }
                       
                    }
                }
            }
            
        } else {
            //회복
             for(let w = firstX; w <= lastX; w++){
                for( let z = firstY; z <= lastY; z++){
                    // boardObject[[w,z]] += degree
                    for(let q = 0;  q < board.length; q++){
                        
                        if ( w === q) {
                             for(let p = 0; p < board[q].length; p++){
                                if(z === p ){
                                    board[q][p] += degree
                                }
                            }
                        }
                       
                    }

                }
            }
        }
}

// var answer = 0;
// let boardArr = Object.entries(boardObject)
// boardArr = boardArr.filter(([,el])=> el >= 1 )
let boardNum = board.join(',')
boardNum = boardNum.split(',').filter(el=> el>=1)
    return boardNum.length;
    //for문만 이용해도 효율성테스트 실패

//     let boardObject = {}
//     for(let i=0; i<board.length; i++){
//         for(let j = 0; j<board[i].length; j++){
//             boardObject[[i,j]] = board[i][j]
//         }
//     }

//     for (let x = 0; x<skill.length; x++){
//         let [type, firstX, firstY,lastX,lastY,degree] = skill[x]
//             if( type === 1 ){
//                 //공격
//                 //r => 행 => 가로방향
//                 //c => 열 => 세로방향
//                 for(let w = firstX; w <= lastX; w++){
//                     for( let z = firstY; z <= lastY; z++){
//                         boardObject[[w,z]] -= degree
//                     }
//                 }
            
//             } else {
//                 //회복
//                  for(let w = firstX; w <= lastX; w++){
//                     for( let z = firstY; z <= lastY; z++){
//                         boardObject[[w,z]] += degree
//                     }
//                 }
//             }
//     }
//     // var answer = 0;
//     let boardArr = Object.entries(boardObject)
//     boardArr = boardArr.filter(([,el])=> el >= 1 )
//     return boardArr.length;
}
// object이용 효율성테스트 실패