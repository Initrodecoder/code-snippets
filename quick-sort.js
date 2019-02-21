const quickSort = (a, left, right) => {
  if (left < right) {
    quickSort(a, left, partition(a, right, left, right) - 1)
    quickSort(a, partition(a, right, left, right) + 1, right)
  }
  return a;
}

const partition = (a, pivot, left, right) => {
  let pivotValue = a[pivot]
  let partitionIndex = left

  for (let i = left; i < right; i++) {
    if (a[i] < pivotValue) {
      swap(a, i, partitionIndex)
      partitionIndex++
    }
  }
  swap(a, right, partitionIndex)
  return partitionIndex
}

const swap = (a, i, j) => {
  var temp = a[i]
  a[i] = a[j]
  a[j] = temp
}

const qsa = [11, 13, 14, 16, 18, 20, 1, 4, 2, 5, 3, 6, 9, 8, 7]
console.log(
    // logs [ 1, 2, 3, 4, 5, 6, 7, 9, 8, 11, 13, 14, 16, 18, 20 ]
    quickSort(qsa, 0, qsa.length - 1)
)
