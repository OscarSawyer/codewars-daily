// Simple, given a string of words, return the length of the shortest word(s).

// // String will never be empty and you do not need to account for different data types.

function findShort(s){
  //split the string from spaces
 return s.split(' ')
  //find the length of each string
  .map(substr=>substr.length)
  .reduce((a,b)=>Math.min(a,b))
   
}