const trackList = document.querySelector('#track')
const total = document.querySelector('#total')
// variables to connect with HTML

//let pressedKey
let numberPressed = ""
let operatorPressed = ""

let a = 0
let b = 0
let operator1 = "" //operator
let operator2 = "" //operator



document.addEventListener('click', function (e) {
    // Listen event from the DOM
    if (e.target.tagName === "BUTTON") {

        console.log("START a:", a, "b:", b, "operator:", operator1)

        // Filters elements clicked in two groups Numbers and Operators
        if (e.target.classList.contains('numbers')) {

            numberPressed += e.target.textContent; //this transports the number accumulated 
            trackList.textContent += e.target.textContent; // this pass it to the HTML

            console.log("numberPressed", numberPressed)
        }
        if (e.target.classList.contains('operators')) {


            if (operator1 === "") {

                if (numberPressed !== "") {

                    a = parseInt(numberPressed)
                    numberPressed = ""
                }
                operator1 = e.target.textContent
                trackList.textContent += e.target.textContent
                console.log("part a", a, b, operator1)

            }
            else if (a !== 0 && operator1 !== "") {

                b = parseInt(numberPressed)
                numberPressed = ""

                if (e.target.classList.contains('equal')) {

                    const equalVal = operate(a, b)


                    console.log("Before AC a:", a, "b:", b, "operator:", operator1)
                    AC()
                    console.log("After AC a:", a, "b:", b, "operator:", operator1)

                    total.textContent = equalVal
                    a = equalVal

                    console.log("END a:", a, "b:", b, "operator:", operator1)
                    return
                }
                operator1 = e.target.textContent
                trackList.textContent += e.target.textContent

                console.log("part b", a, b, operator1)
            }

            if (e.target.classList.contains('deleters')) {
                if (e.target.textContent === "AC") {
                    AC()
                    return
                }
                if (e.target.textContent === "C") {
                    C()
                    return
                }
            }

        }

    }
})


// operator Functions 

function operate(a, b) {

    switch (operator1) {
        case "+": {
            const tempVal = add(a, b)
            console.log("EXE add:", tempVal)
            return tempVal
        }
        case "-": {
            const tempVal = subtract(a, b)
            console.log("EXE substract:", tempVal)
            return tempVal
        }
        case "÷": {
            const tempVal = divide(a, b)
            console.log("EXE divide:", tempVal)
            return tempVal
        }
        case "x": {
            const tempVal = multiply(a, b)
            console.log("EXE multiply:", tempVal)
            return tempVal
        }
        case "%": {
            const tempVal = remainer(a, b)
            console.log("EXE substract:", tempVal)
            return tempVal
        }
        case "^": {
            const tempVal = power(a, b)
            console.log("EXE power:", tempVal)
            return tempVal
        }
        default: return console.log("doesnt work")
    }
}






const add = function () {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
};

const subtract = function () {
    let total = 0;
    for (let i = 1; i < arguments.length; i++) {
        total = arguments[0] - arguments[i]
    }
    return total
};

const sum = function (numbers) {

    if (numbers !== []) {

        const initialVal = 0;
        const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialVal);
        return sum

    } else return false
};

const multiply = function (number) {

    const total = a * b

    return total;
}
const divide = function (a, b) {
    const total = a / b
    return total
}
const remainer = function (a, b) {
    const total = a % b
    return total
}

const power = function (a, b) {

    const total = Math.pow(a, b)
    return total;
}
const AC = function () {
    trackList.textContent = ""
    total.textContent = 0

    numberPressed = ""
    operatorPressed = ""
    operator1 = ""

    a = 0
    b = 0

    return 0
}
const C = function () {
    trackList.textContent = trackList.textContent.slice(0, -1);
    return 0
}

const factorial = function (number) {
    if (number === 0) {
        return 1;
    }
    let total = number;
    for (let i = number - 1; i > 0; i--) {

        total *= i
    }
    return total
};