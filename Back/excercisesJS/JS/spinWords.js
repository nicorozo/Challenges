function spinWords(string) {

    let words = string.split(' ')
    console.log(words)

    let newArray = words.map(word => {
        if (word.length >= 5) {
            return word.split('').reverse().join('')
        } else {
            return word
        }
    })

    return newArray.join(' ')
}
console.log(spinWords('123456 aps 765432'))
