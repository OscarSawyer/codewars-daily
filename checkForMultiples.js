//Return a new array consisting of elements which are multiple of their
// own index in input array (length > 1).
// Some cases:
 const profit = [22, -6, 32, 82, 9, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
const isMultiple = array =>{
    return array.filter((element, index)=>element%index===0)
}
console.log(isMultiple(profit))