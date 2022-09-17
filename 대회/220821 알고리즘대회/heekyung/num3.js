function solution(fees, records) {
    let carList = []
    let timelist = {}
    let maxTime = (23*60)+59
    
          // 5000 + (주차시간 - 180 /10) * 600
            let baseTime = fees[0]
        let baseFee = fees[1]
        let timeNum = fees[2]
        let timeFee = fees[3]
    function feeNum (time) {
        if(time-baseTime <= timeNum) {
            return timeFee
        }
        
    return baseFee +   Math.ceil((time - baseTime) /timeNum) * timeFee
}   
    
    for( let i = 0 ; i<records.length; i++){
      let records2 = records[i].split(' ')
      records2[1] = Number(records2[1] )
      carList.push(records2[1])
        
        //시간변환
        let time = records2[0].split(':')
        let hour = Number(time[0]) * 60
        let timeCap = Number(time[1]) + hour
      if(!timelist[records2[1]]){
         timelist[records2[1]] = [timeCap+' ']
      } else {
          timelist[records2[1]] += [timeCap+' ']
      }
    }
    


    
    //차 번호 sort
    const set = new Set(carList);
    let uniqueCar = [...set];
    uniqueCar = uniqueCar.sort((a,b)=> a-b)
    
 
    
    uniqueCar = uniqueCar.map(el => timelist[el])
    uniqueCar = uniqueCar.map(el => el.toString().trim().split(' '))
let result = []
    for(let y=0; y <uniqueCar.length; y++){
        let CarTime = uniqueCar[y]

        if( CarTime.length % 2 !==  0){
            CarTime.push(maxTime)
        }
            let newArr =[]
        for(let l=0; l<CarTime.length; l+=2) newArr.push(CarTime.slice(l, l+2));
        
        for(let n = 0; n <newArr.length; n++){
       
            newArr[n] = newArr[n].map(Number)
            newArr[n] = newArr[n].reduce((acc, cur) => cur - acc)
        }
        
            newArr = newArr.reduce((acc,cur)=>acc+cur)

         if(newArr <= baseTime){
        result.push(baseFee)
} else {
     result.push(feeNum(newArr))
}

            
       
        
    }

//[14240, 34400, 2960]
    return result;
}

// 채점 결과
// 정확성: 43.8
// 합계: 43.8 / 100.0