const getAvgOfNums = arrOfNums =>{
    if(!arrOfNums || arrOfNums.length<2){
        return []
    }
    const results = [];

    for(let i = 0; i<arrOfNums.length-1; i++){
        results.push((arrOfNums[i] + arrOfNums[i+1])/2)
    }
    return results
}

console.log(getAvgOfNums([2,4,5,6,7,10]))