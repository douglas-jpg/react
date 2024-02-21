interface Vehicle {
    make: string;
    model: string;
    year: number;
}

const showVehicle = (vehicle: Vehicle): void => {
    console.log(
        `Veiculo da marca ${vehicle.make} do modelo ${vehicle.model} do ano ${vehicle.year}`
    );
};

const fusca: Vehicle = {
    make: 'fusca',
    model: 'dragon2025',
    year: 2024,
};

showVehicle(fusca);

function firstElement<T>(array: T[]): T {
    return array[0];
}

console.log(firstElement([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(firstElement(['dougals', 'lima']));

type Products = {
    id: number;
    name: string;
    price: number;
};

function freezProduct(product: Products): Readonly<Products> {
    return Object.freeze(product);
}

const bread: Products = {
    id: 1,
    name: 'pao',
    price: 1,
};

const newBread = freezProduct(bread);
console.log(newBread)

// newBread.id = 34 => Não é possível atribuir a 'id' porque é uma propriedade de somente leitura.

function updatePrice(product: Products, newPrice: Partial<Products>): Products {
    return { ...product, ...newPrice };
}

const updateBread = updatePrice(bread, {price: 100});

console.log(updateBread)
