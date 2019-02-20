const wrapper = () => {
  // the inner, nested worker function closes over the counter variable
  // which essentially persists the value held in counter over multiple
  // calls to the wrapper function
  let counter = 0
  return worker = () => counter++
};

const w = wrapper()
// logs 0 1
console.log(
    w(), 
    // each additional call increments the closed over counter variable in the wrapper function
    // the inner, nested worker function inside the wrapper function
    // has and retains access to the inner counter variable. the next function call
    // to the w function would increment the counter variable to 3, and so on.
    w()
)
