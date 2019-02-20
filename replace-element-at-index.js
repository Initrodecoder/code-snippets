const replaceElementAtIndex = (a, i, e) => {
  return a.map((elm, idx) => (idx === i ? e : elm))
}

console.log(
    // logs [ 1, 2, 'replaced', 4, 5 ]
    replaceElementAtIndex([1, 2, 3, 4, 5], 2, "replaced")
)
