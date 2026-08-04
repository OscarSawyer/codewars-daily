const sumNums = arrOfNums=>{
    const sorted = arrOfNums.sort((a,b)=>(a-b))
   const  sumNums = sorted[1] + sorted[sorted.length-2]
    console.log(sumNums)
}
sumNums([2,10,3,5,6,9,7])