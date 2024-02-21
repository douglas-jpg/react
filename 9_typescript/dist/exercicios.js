"use strict";
const showVehicle = (vehicle) => {
    console.log(`Veiculo da marca ${vehicle.make} do modelo ${vehicle.model} do ano ${vehicle.year}`);
};
const fusca = {
    make: 'fusca',
    model: 'dragon2025',
    year: 2024,
};
showVehicle(fusca);
function firstElement(array) {
    return array[0];
}
console.log(firstElement([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(firstElement(['dougals', 'lima']));
function freezProduct(product) {
    return Object.freeze(product);
}
const bread = {
    id: 1,
    name: 'pao',
    price: 1,
};
const newBread = freezProduct(bread);
console.log(newBread);
// newBread.id = 34 => Não é possível atribuir a 'id' porque é uma propriedade de somente leitura.
function updatePrice(product, newPrice) {
    return Object.assign(Object.assign({}, product), newPrice);
}
const updateBread = updatePrice(bread, { price: 100 });
console.log(updateBread);
