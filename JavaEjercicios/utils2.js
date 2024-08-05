const products = [
    {
        nombre: "Manzana",
        precio: 10

    },

    {
        nombre: "Pera",
        precio: 90

    },

    {
        nombre: "Uva",
        precio: 150

    },

    {
        nombre: "Banano",
        precio: 1500

    }

];

const highPriceReturn = (array) => {
    
    const newArray = [];

    array.forEach(element => {
        if (element.precio >= 50) {
            newArray.push(element.nombre);
        }
    });

    return newArray;
}

const print2 = `El nuevo arreglo es: ${highPriceReturn(products)}`;
console.log(print2);


