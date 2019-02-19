// wrap up the console.log function
const log = console.log

// the array we'll be operating on and working with
const a = [1,2,3,4,5,6,7,8,9]

log(
  a.map(
    // updates all the elements in the array to be: 'mapped 1', 'mapped 2'...
    (e,i) => 'mapped ' + e
  )
)

log(
  a.some(
    // returns true because one of the elements in the array matches the condition in the function passed
    // into the some method call
    (e,i) => e === 3
  )
)

log(
  a.every(
    // returns true because all elements in the array match the condition in the function passed into
    // the every method call
    (e,i) => e === i+1
  )
)

log(
  a.filter(
    // returns the element in the array matching the condition in the function passed into the 
    // filter method call
    (e,i) => e === 3
  )
)

a.forEach(
  // logs the numbers one at a time: 0 2 6 12 20 30 42 56 72 as each element is multiplied 
  // by the current index in the forEach loop. note that this method call does not return a value
  (e,i) => log(e * i)
)

log(
  // returns true because there is an element in the array that matches the value passed into
  // the includes method call
  a.includes(3)
)

log(
  a.find(
    // returns 4 because it is the first value matching the condition in the function passed
    // into the find method call
    (e,i) => e > 3
  )
)

log(
  // returns 2 because it is the index of the value matching the condition in the function
  // passed into the indexOf method call
  a.indexOf(3)
)

log(
  // returns 10 because that's the updated length of the array after the new value is pushed
  // or added to the array. the push method adds elements to the right side of the array.
  // the array is mutated in place.
  a.push('sprocket')
)
// logs [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'sprocket' ] note that push does not return the updated
// array, rather the length of the array after the update.
log(a)

// logs sprocket because it's the element removed by the pop method call. note this value
// is removed from the right side of the array and mutates the array in place.
log(
  a.pop()
)
// logs [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] note that pop does not return the updated array.
// the pop method returns the element that was removed on the right side of the array
log(a)

// logs 1 because it's the element removed by the shift method call. note this value
// is removed from the left side of the array and mutates the array in place.
log(
  a.shift()
)
// logs [ 2, 3, 4, 5, 6, 7, 8, 9 ] note that shift does not return the updated array.
// the shift method returns the element that was removed on the left side of the array
log(a)

log(
  // returns 9 because that's the updated length of the array after the new value is ubshifted
  // or added to the array. the unshift method adds elements to the left side of the array.
  // the array is mutated in place.
  a.unshift('spacely')
)
// logs [ 'spacely', 2, 3, 4, 5, 6, 7, 8, 9 ] note that unshift does not return the updated
// array, rather the length of the array after the update.
log(a)

// logs [ 'spacely', 2, 3, 4, 5 ] because slice returns a new array starting at the index
// passed as the first argument ond ending at the index passed as the second argument of
// the method call
log(
  a.slice(0,5)
)

log(
  // logs [ 4, 5, 6, 7, 8 ] because these are the elements spliced or removed from the array.
  // the first argument is the index in the array to begin deletion, the second argument is
  // where to stop the deletion and the third argument is a value to be inserted into the array
  // after the deletion. note this array does not return the modified array. also note that the
  // array is mutated in place.
  a.splice(3,5,'spliced')
)
// logs [ 'spacely', 2, 3, 'spliced', 9 ] which is the updated array after the above splice method call.
log(a)