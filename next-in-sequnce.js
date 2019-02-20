const log = console.log

const nextInSequence = a => {
    const mutated = [... new Set(a)]
    return mutated.length === 1 ? [... mutated, mutated[0]+1] : [... a, mutated[mutated.length-1]+1]
}

log(
    // logs [ 1, 2, 3, 4, 5, 6, 7 ]
  nextInSequence([1,2,3,4,5,6])
)
log(
    // logs [ 9, 10 ]
  nextInSequence([9,9,9,9])
)
log(
    // logs [ 0, 1 ]
    nextInSequence([0])
)