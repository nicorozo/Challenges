function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return (`${title} by ${author}, it has ${pages} pages and ${read ? 'yes I have read it' : 'no I havent read it'}`)
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

