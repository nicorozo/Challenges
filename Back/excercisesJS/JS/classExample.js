class Cat extends Animal {
    constructor(name) {
        super(name)
    }
    speak() {
        return this.name + ' meows.'
    }

}
let myCat1 = new Cat('Fonso')
console.log(myCat1.addMeow())
// --------------------------------------

class Cat extends Animal {
    speak() {
        return `${this.name} meows.`;
    }
}