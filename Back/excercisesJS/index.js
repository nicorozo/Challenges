function titleToNumber(title) {
    let arrayOfIndex = []
    let total = 0
    let power = title.length
    for (let i = 0; i < title.length; i++) {
        arrayOfIndex[i] = (title.charCodeAt(i) - 64)
        if (i > 0) {
            arrayOfIndex[i - 1] = arrayOfIndex[i - 1] * (26 ^ power)
        }
        power--
    }
    arrayOfIndex.forEach((element) => total += element)
    return total
}
console.log(titleToNumber('AA'))

//  = last letter - 2
// letter * 26 =  last letter - 1
// lastLetter = letter 

function titleToNumber(title) {
    var arr = title.split("");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charCodeAt(0) - 64
    }
    arr.reverse();
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += (arr[i] * Math.pow(26, i));
    }
    return sum;
}