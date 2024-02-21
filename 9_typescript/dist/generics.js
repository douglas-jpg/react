"use strict";
// algo não ficar restrigindo ao um tipo x
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([1, 2, 3, 4]);
let textArray = getArray(['Douglas', 'de', 'lima', 'bezerra']);
console.log(numberArray);
console.log(textArray);
// restringir alguns tipos
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const pessoal = {
    nome: 'douglas',
    idade: 20,
};
const profissional = {
    profissoa: 'programador',
    salario: 5000,
};
const data = merge(pessoal, profissional);
console.log(data);
