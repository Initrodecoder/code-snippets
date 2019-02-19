// a stack follows LIFO(Last in First Out) and FILO(First in Last Out)
// one approach is to use the pop and push methods of the array object.
// this approach operates on the right side of the array and mutates
// the array in place. this is mostly a simpler wrapper around an array
// meant to demonstrate the very basic concepts of a stack in javascript.
const stack = () => {
    return [];
}

const addToStack = (item, stack) => {
    stack.push(item);
}

const removeFromStack = (stack) => {
    stack.pop();
}

const testStack = stack(); 
addToStack('1', testStack);
addToStack('2', testStack);
// logs testStack: 1,2
console.log("testStack: "+testStack);

removeFromStack(testStack);
// logs testStack: 1
console.log("testStack: "+testStack);