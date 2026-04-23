const reverseStr=(str)=>{
  let result = str
  .split(' ')
  .map(word=>word.length>=5?word.split('').reverse().join(""): word)
  .join(' ')
}
console.log(reverseStr('oscar is a great programmer'))