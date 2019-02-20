const log = console.log

const search = (array, item) => {
  if (array.length === 0) {
    // nothing found. no work to do. bail.
    return false
  } else {
    // reduce the size of the array and number of elements 
    // being searched each time through the function.
    // cutting the search size in half and then half again
    // creates the logorithm that allows for a worst case
    // time complexity of O(n) or logorithmic.
    const mid = Math.floor(array.length / 2)
    if (item === array[mid]) {
      // best case scenario, the element being searched for
      // is the exact middle element of the array. no more
      // processing to do.
      return true
    } else {
      if (array[mid] < item) {
          // run the search again, this time in the RIGHT half of the original array
        return search(array.slice(mid + 1), item)
      } else if (array[mid] > item) {
          // run the search again, this time in the LEFT half of the original array
        return search(array.slice(0, mid), item)
      }
    }
  }
}

log(
  // logs false, element 0 not found in the array
  search([1, 2, 3, 4, 5, 6, 7, 8, 9], 0),
  // logs true, element 3 found in the array
  search([1, 2, 3, 4, 5, 6, 7, 8, 9], 3),
  // logs true, element 7 found in the array
  search([1, 2, 3, 4, 5, 6, 7, 8, 9], 7),
  // logs false, element 10 not found in the array
  search([1, 2, 3, 4, 5, 6, 7, 8, 9], 10),
  // logs true, element 5 found in the array
  search([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)
)
