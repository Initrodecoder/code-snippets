const log = console.log

const findLowest = a => {
  let lowest = 0
  a.forEach((e, i) => {
    if (e < a[i + i]) {
      lowest = e
    }
  })
  return lowest
}

log(
    findLowest([3,5,2,4,9,7,2,8,6])
)

const ss = a => {
  const ra = []
  a.forEach((e, i) => {
    if (a[i] < findLowest(a)) {
      ra.push(e)
    } else {
      ra.push(findLowest(a))
    }
  })
  return ra
}

log(
    ss([1,3,5,2,4,9,7,8,6])
)

const selectionSort = a => {
  const array = [...a];
  var temp
  array.forEach((e, i) => {
    var mi = i
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[mi]) mi = j
    }
    temp = e
    array[i] = array[mi]
    array[mi] = temp
  });
  return array
};

log(
    selectionSort([1, 3, 5, 2, 4, 9, 7, 8, 6])
);

const sst = ar => {
  let a = [...ar] // copy array, avoid mutation
  a.forEach((e, i) => {
    // step through each index
    let midx = i // minimum index
    // search array forward from current
    // element
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[midx]) {
        // found element greater than
        // element one index ahead of
        // outer forEach traversal.
        // update minimum index
        midx = j
      }
    }
    // store element found in inner loop
    // that is less than the current element
    // being looked at in the forEach loop
    // in the current elements index
    a[i] = a[midx]
    // store the current element in the
    // minimum index
    a[midx] = e
  });
  return a
};

log(sst([1, 3, 5, 2, 4, 9, 7, 8, 6]));

const selSort = a => {
  a.forEach((e, i) => {
    let midIndex = i
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[midIndex]) midIndex = j
    }
    //log("a[i]: " + a[i])
    a[i] = a[midIndex]
    a[midIndex] = e
    //log("a[midIndex]: " + a[midIndex])
  })
  return a;
}

log(
    selSort([38, 23, 14, 52, 44, 1, 2, 1])
)
