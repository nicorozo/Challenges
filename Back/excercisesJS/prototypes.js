function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = isRead
    this.info = function () {
        return (`${title} by ${author}, it has ${pages} pages and ${isRead ? 'yes I have read it' : 'no I havent read it'}`)
    }
}
const book1 = new Book('Harry Potter', 'Donna', '234', true)

console.log(book1.info())

/////////////////////////////////////////////


function Student() {

}
Student.prototype.sayName = function () { console.log('Student prototype', this.name) }

function EightGrader(name) {
    this.name = name
    this.grade = 8
}

EightGrader.prototype = Object.create(Student.prototype)
//EightGrader.prototype.sayName = function () { console.log('EightGrader prototype') } this works as first layer if activated

const myInput = new EightGrader('Namesio')

myInput.sayName()

Object.getPrototypeOf(EightGrader);


//////////////////////////////////////////////

function Person(race, sex) {
    this.race = race
    this.sex = sex
}

const daniel = new Person('white', 'male')

Person.prototype.newMethod = function () {
    return `Race: ${this.race} and Sex: ${this.sex}`
}


console.log(daniel.newMethod())
////////////////////////////////

class House {
    constructor(color) {
        this.color = color
    }
    instanceMethod() {
        console.log('This is an instance method')
    }
    static staticMethod() {
        console.log('this is a static method')
    }
}
const houseObject = new House('red')

House.staticMethod()
houseObject.instanceMethod()

// Object prototype and Constructor interactions 
function Student() {
}

Student.prototype.sayName = function () {
    console.log(this.name)
}

EighthGrader.prototype = Object.create(Student.prototype)
function EighthGrader(name) {
    this.name = name
    this.grade = 8
}

NinthGrader.prototype = Object.create(Student.prototype)
function NinthGrader(name) {
    this.name = name
    this.grade = 9
}
NinthGrader.prototype.sayName = function () {
    console.log("HAHAHAHAHAHA")
}


const studentOne = new NinthGrader('Josh')
studentOne.sayName()

const studentTwo = new EighthGrader('Mary')
studentTwo.sayName()