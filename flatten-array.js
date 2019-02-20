
const log = console.log

const flattenArray = a => {
    let flattened = []
    a.forEach((e) => {
        if (e instanceof Array) {
            flattenArray(e).forEach(elm => flattened.push(elm) )
        } else {
            flattened.push(e)
        }
    })
    return flattened
}
// logs [ 1, 2, 3, 4, 5 ]
log(flattenArray([1, 2, 3, 4, 5]))
// logs [ 1, 2, 8, 9, 5, 1, 2, 3 ]
log(flattenArray([1, 2, [8, 9, 5], 1, 2, 3]))

const flattenArrayByReduction = a => {
  return a.reduce((accumulator, value) => accumulator.concat(value), [])
}
// logs [ 1, 2, 3, 1, 2, 3, 4, 5, 4, 5 ]
log(flattenArrayByReduction([1, 2, 3, [1, 2, 3, 4, 5], 4, 5]));

const flattenArrayNative = a => {
    if (a.flat) {return a.flat()} else{return flattenArrayByReduction(a)}
}
// logs [ 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7 ]
log(flattenArrayNative([1, 2, 3, 4, [1, 2, 3, 4], 5, 6, 7]))

const flattenArrayByReductionRecursive = a => {
  return a.reduce(
      (accumulator, value) => 
        (Array.isArray(value) ? accumulator.concat(flattenArrayByReductionRecursive(value)) : accumulator.concat(value)), []
    )
}
// logs [ 1, 2, 3, 4, 9, 8, 0, 4, 3, 8, 6, 7, 6, 4, 3, 2, 1 ]
log(flattenArrayByReductionRecursive([1, 2, 3, 4, [9, 8, [0, 4, 3, 8, 6], 7, 6], 4, 3, 2, 1]))

const flattenArrayStringSplitMap = a => {
  return a
    .toString()
    .split(",")
    .map(e => parseInt(e))
}
// logs [ 1, 2, 3, 4, 9, 8, 0, 4, 3, 8, 6, 7, 6, 4, 3, 2, 1 ]
log(flattenArrayStringSplitMap([1, 2, 3, 4, [9, 8, [0, 4, 3, 8, 6], 7, 6], 4, 3, 2, 1]))
