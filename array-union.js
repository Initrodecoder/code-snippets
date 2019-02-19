const union = (leftArray,rightArray) => {
  return [... new Set(leftArray.concat(rightArray))]
}

console.log(
    // logs [1,2,3,4,5,6,7,8,9,10,11,12]
    union([1,2,3,4,5,6,7,8,9],[1,2,3,4,4,4,2,10,11,12])
  )