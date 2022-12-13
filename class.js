class Pessoa {

    constructor(name, age){
        this.name = name
        this.age = age
    }

    happyBirthday(){
        this.age++
    }

    sayHello() {
        console.log("hello ", this.name)
    }
}

class CrazyScientist extends Pessoa {
    sayHello() {
        console.log("I am a pickle", this.name)
    }
}

const rick = new CrazyScientist("rick", 52)
rick.happyBirthday()
rick.sayHello()

console.log(rick);