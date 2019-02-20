
// es6 functional programming basics
const add = x => y => z => x + y + z

// partial application
const addOne = add(1)
const addThree = addOne(2)

console.log(
  addThree(7)
)
// currying
console.log(add(1)(5)(4))
console.log(add('sean')('thedev')('guy'))