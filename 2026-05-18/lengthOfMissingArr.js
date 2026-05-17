// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their 
// length-values are consecutive.
// But one array is missing!
// You have to write a method, that return the length of the missing 
// array.
// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
// If the array of arrays is null/nil or empty, the method should return 0.
// When an array in the array is null or empty, the method should return
//  0 too!
// There will always be a missing element and its length will be always between the given arrays.

let testArr= [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]
function getLengthOfMissingArray(arrayOfArrays) {
 if(arrayOfArrays.length===0){return 0};
  let lengthOfArr = (arrayOfArrays || [])
  .map(array=>{
    if(array.length===0){return 0}
    return array.length
  })
  .sort((a,b)=>(a-b))
  if(lengthOfArr.includes(0)){return 0};
  
  for(let i = 0; i<lengthOfArr.length; i++){
    if(lengthOfArr[i + 1] !== lengthOfArr[i] + 1){
      return lengthOfArr[i] + 1
    }
  }
  
  return 0;
}
console.log(getLengthOfMissingArray(testArr))