// remove duplicates from array
const a = [1, 2, 3, 4, 4, 5, 6, 7, 1, 8, 9]

console.log(
    // logs [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  a.filter((item, index) => a.indexOf(item) === index)
)
