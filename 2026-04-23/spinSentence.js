// Write a function that:
// Takes a sentence
// Changes every word with 4 or more letters to UPPERCASE
// Leaves shorter words unchanged
// Returns the final sentence
const sentenceCheck = sentence=>{
    //create an array for storing results
    let results = [];
    //split the sentence
    return sentence
    .split(' ')
    //check for words with 4 or more letters
    .map(function (word){
        //transform them to uppercase
        if(word.length>=4){
            return word.toUpperCase()
        }else{return word}
    })
    .join(' ')
    
}
  //console.log(sentenceCheck("ALscartech solutions is helping businesses migrate from analog to digital marketing"))
const spintSentence = sentence =>{
    return sentence
    .split(' ')
    .map(word=>word.length>=4?word.toUpperCase(): word)
    .join(' ')
}
 console.log(spintSentence("Hello Uganda, are you gooood?"))

 