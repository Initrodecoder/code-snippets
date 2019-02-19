
// a queue follows FIFO (First in First Out).
// one approach is to use the unshift and pop methods of the array object.
// this approach operates on the both sides of the array and mutates
// the array in place. this is mostly a simpler wrapper around an array
// meant to demonstrate the very basic concepts of a queue in javascript.
const queue = () => {
    return [];
}

const enqueue = (item, queue) => {
    queue.unshift(item);
}

const dequeue = (queue) => {
    queue.pop();
}

const testQueue = queue(); 
enqueue('1', testQueue);
enqueue('2', testQueue);
// logs testQueue: 2,1
console.log("testQueue: "+testQueue);

dequeue(testQueue);
// logs testQueue: 2
console.log("testQueue: "+testQueue);