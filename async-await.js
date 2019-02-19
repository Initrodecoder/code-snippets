const f = async () => {
  return 1
}

f().then(
  (r) => {
      // logs 1 because it's the value passed as an argument to the function
      // being passed into the then function by the async method which is
      // a wrapper on the Promise class
    console.log(r)
  }
)

const fn = async () => {
  let promise = new Promise(
    (resolve, reject) => {
      setTimeout(
        () => resolve("done!"), 700
      )
    }
  )
  let result = await promise
  // logs 'done!' because it's the value passed as an argument
  // from the async's inner promise. the result variable is assined
  // the value once the Promise finishes its work calling resolve or reject.
  // the await keyword only works inside async functions.
  console.log(result)
}

fn()