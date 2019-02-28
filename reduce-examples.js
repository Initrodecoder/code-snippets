const log = console.log

const reduceAdd = a => {
    return a.reduce(
        (accumulator, currentValue, currentIndex, self) => {
            log(`accumulator ${accumulator} currentValue ${currentValue} currentIndex ${currentIndex}`)
            return accumulator + currentValue 
        }, 
    )
}

log(
    reduceAdd([1,2,3,4,5])
)

log(
    reduceAdd([`a`,`b`,`c`,`d`])
)


// function composition for piping a series of function calls where the output of 
// each function call is passed to the next as the functions arguments
const pipe = (...functions) => input => functions.reduce((args, fn) => fn(args),input)

const stringer = s => s.toString()
const splitter = s => s.split(",")
const mapper = a => a.map(e => parseInt(e))

const flatten = pipe(stringer, splitter, mapper)

log(
  flatten([1, 2, 3, 4, [9, 8, [0, 4, 3, 8, 6], 7, 6], 4, 3, 2, 1])
)


