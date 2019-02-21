// imperitive approach, non-destructive, original array not mutated
const reverse = a => {
  let mutated = []
  for (let i = 0; i < a.length; i++) {
    mutated[i] = a[a.length - i - 1]
  }
  return [...mutated]
};

console.log(
    // logs [ 5, 4, 3, 2, 1 ]
    reverse([1,2,3,4,5,6,7,8,9])
)

// declaritive approach, non-destructive, original array not mutated
const reverseDeclaritive = array => {
    return array.map((elm,idx,self) => self[self.length-idx-1])
}

console.log(
    // logs [ 5, 4, 3, 2, 1 ]
    reverseDeclaritive([1,2,3,4,5])
)
