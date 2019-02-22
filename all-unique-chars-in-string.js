const log = console.log

const allUniqueCharsInString = s => {
    return Object.is([... new Set(s.split(''))].toString(), s.split('').toString())
}

log(
    allUniqueCharsInString('abcd')
)

log(
    allUniqueCharsInString('aabcd')
)

log(
    allUniqueCharsInString('abbcd')
)

log(
    allUniqueCharsInString('abbcddd')
)