const checkPermutation = (s1,s2) => {
  if (s1.length !== s2.length) return false
  return Object.is(s1.split('').sort().toString(), s2.split('').sort().toString())
}

console.log(
    checkPermutation('aba', 'aab')
)