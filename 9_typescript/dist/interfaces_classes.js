"use strict";
// interfaces => serve para mapear todos os campos
const myUser = { id: 1, name: 'douglas', isActive: false };
// clases
class Person {
    constructor(id, name, isActive) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
        this.saldo = 0;
    }
    great() {
        console.log(`Ola meu nome é ${this.name}`);
    }
    soma() {
        this.saldo;
    }
}
const personData = new Person(1, 'dougals', true);
personData.great();
