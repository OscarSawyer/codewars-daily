// given an array;
// const developers = [
// {name: "Ali", language: "Python"},
// {name: "Sara", language: "JavaScript"},
// {name: "Tom", language: "Go"}
// ]

// // Write a function hasPython(devs) that returns true if any developer
// //  codes in Python.

// const devCheck = devs =>{
//     return devs.some(dev=>dev.language === "Python")
// }
// console.log(devCheck(developers))

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];



const check4EuropeanJsDevs = devs =>{
    return devs.filter(dev=>dev.language ==="JavaScript" && dev.continent==="Europe").length

}
console.log(check4EuropeanJsDevs(list1))
