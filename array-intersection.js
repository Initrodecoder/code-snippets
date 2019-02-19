const intersection = (leftArray, rightArray) => {
  return [...new Set(leftArray)].filter(element => new Set(rightArray).has(element))
}

console.log(
  // logs [1,2,3,4]
  intersection([1,2,3,4,5,6,7,8,9],[1,2,3,4,4,4,2,10,11,12])
)