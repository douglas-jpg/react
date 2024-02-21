// algo não ficar restrigindo ao um tipo x
function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let numberArray = getArray([1, 2, 3, 4]);
let textArray = getArray(['Douglas', 'de', 'lima', 'bezerra']);

console.log(numberArray);
console.log(textArray);

// restringir alguns tipos
function merge<T extends object, U extends object>(obj1: T, obj2: U): object {
    return { ...obj1, ...obj2 };
}

const pessoal: { nome: string; idade: number } = {
    nome: 'douglas',
    idade: 20,
};

const profissional: { profissoa: string; salario: number } = {
    profissoa: 'programador',
    salario: 5000,
};

const data = merge(pessoal, profissional);

console.log(data);
