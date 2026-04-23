const developers = [
  { name: "Alice", language: "JavaScript" },
  { name: "Bob", language: "Python" },
  { name: "Charlie", language: "JavaScript" },
  { name: "David", language: "Java" },
  { name: "Eva", language: "Python" },
  { name: "Frank", language: "JavaScript" }
];

// const countLangs =(devs)=>{
//     const countOflangs ={}
//     for(const dev of devs){
//         if(countOflangs[dev.language]){
//             countOflangs[devs.langauge]++
//         }else{
//             countLangs[devs.language]=1
//         }
//     }
//     return countLangs
// }
// console.log(countLangs(developers))

const countLanguages =(developers)=>{
    const result ={};
    for(let developer of developers){
        result[developer.language]?result[developer.language]++
        :result[developer.language] = 1
    }
    return result;
}
console.log(countLanguages(developers))