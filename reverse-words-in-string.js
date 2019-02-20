
const reverseWords = string => {
    return string
        .split(" ")
        .reverse()
        .join(" ")
}

console.log(
    // logs done! it get just let's reason. some for reversed be to needs that string a it's
    reverseWords("it's a string that needs to be reversed for some reason. let's just get it done!")
)