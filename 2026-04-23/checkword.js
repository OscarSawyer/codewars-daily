const checkSentence = sentence =>{
  return sentence
  .split(' ')
  .map(word=>word.length>=5? word.split('').reverse().join(''):word.length===4? word.toUpperCase():word)
  .join(' ')
}
console.log(checkSentence('Oscar is a truth testimony of resilience and pushing on'))