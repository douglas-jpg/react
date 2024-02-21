// interfaces => serve para mapear todos os campos

interface User {
    id: number;
    name: string;
    isActive: boolean;
}

const myUser: User = { id: 1, name: 'douglas', isActive: false };

// clases

class Person implements User {
    id: number;
    name: string;
    isActive: boolean;
    private saldo: number;

    constructor(id: number, name: string, isActive: boolean) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
        this.saldo = 0;
    }

    great(): void {
        console.log(`Ola meu nome é ${this.name}`);
    }

    soma(): void {
        this.saldo;
    }
}

const personData = new Person(1, 'dougals', true);
personData.great();
