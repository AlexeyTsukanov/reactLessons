'use strict';

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    #surname = "Tsukanov";

    say = () => {
        console.log(`User: ${this.name} ${this.#surname}, age ${this.age}`);
    }

    get surname(){
        return this.#surname;
    }

    set surname(surname){
        this.#surname = surname;
    }
}

const persone = new User('Alexey', 24);

persone.say();
console.log(persone.surname);
persone.surname = 'Ivanov';
persone.say();
persone.age = 25;
persone.say();