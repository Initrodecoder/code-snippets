function sumAll(arr) {
  const sorted = arr.sort((a,b)=> a-b);
  const f = arr[0]
  const last = arr[1]

  // using arithmetic progression summing formula
  const s = (last - f + 1) * (f + last) / 2;

  return s;
}

sumAll([1, 4]);