const findLongestWordLength = (str) => {
  let a = str.split(" ");
  let lw = 0;
  a.forEach((elm,idx,self)=>{
    const hasNext = self[idx+1];
    if (hasNext) {
      let nl = self[idx+1].length;
      if (nl > elm.length) {
        if (nl > lw) {
          lw = nl;
        }
      }
    }
  })
  return lw;
}

console.log(
    findLongestWordLength("The quick brown fox jumped over the lazy dog")
)