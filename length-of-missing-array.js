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
// There will always be a missing element and its length will be always 
// between the given arrays.

//NOTE, WRITE PSEUDO CODE FOR THE ENTIRE SOLUTION BEFORE STARTING


 


//func get length of missimg arrays
function getLengthOfMissingArray(arrayOfArrays) {

    //if the it is not an array or if it is empty, return 0
    if(!arrayOfArrays || arrayOfArrays.length===0){
        return 0
    }
//create an array of length of inner arrays 
  const lengthOfArrays= (arrayOfArrays || [])
  
//for each iner array in arrayOfArrays, if inner array is null or empty, return 0
//adding inner array lengths to lengthOfArrays
  .map(array=>{
    if(!array || array.length ===0){
        return 0
    }return array.length
  })
  //sorting the lengths in ascending order
  .sort((a,b)=>(a-b))
  //get the length of the missing array
  if( lengthOfArrays.includes(0)){
    return 0
  }
  //for each index from 0 to lengthOfArrays-2, if the length is not current 
  //current length +1, return current length +1
  for(let i=0;i< lengthOfArrays.length-1;i++){
    if( lengthOfArrays[i] + 1 !==  lengthOfArrays[i+1]){
      return  lengthOfArrays[i] + 1
    }
  }
  return 0;
}



