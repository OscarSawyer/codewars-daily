// Write a function that reverses words with five or more letters in a 
// given string:
const reverseString = str=>{
    return str
    .split(' ')
    .map(word=>{
        return word.length>=5? 
        word.split('').reverse().join('')
        :word;
    })
    .join()
}

//Alternatively withouth tenary operators
console.log(reverseString('Oscar is a fantastic programmer in js'))
function reverseStr(sentence){
    return sentence
    .split(' ')
    .map(function (word){
        return word.length>=5?
        word.split('').reverse().join('')
        :word;
    })
    .join('')
}

students = ['Oscar', 'ck','chris','ivan']

for(let i = 0; i<students.length; i++){
    console.log(`You need to come for your results ${students[i]}`)
}
for(const student of students){
    console.log(student.toUpperCase())
}
students.forEach(function(student){
    console.log(`Hello ${student}, welcome to ALscarTech solutions`)
})
console.log(students[0])
console.log(students.length-1)