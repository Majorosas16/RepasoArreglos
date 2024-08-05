const fruits = [
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

function ordenarPorPrecio(array) {
    return array.slice().sort((a, b) => a.precio - b.precio); // sort: ordena los objetos por su propiedad precio de menor a mayor.
}

const productosOrdenados = ordenarPorPrecio(fruits);
console.log(productosOrdenados);

// const guardar = [];

// function fruitsArray(array) {
//     const newArray = array.slice(); // copia del array para que no se dañe el original
//     for (let i = 0; i < array.length; i++) {

//         for (let j = 0; i < array.length; j++) {
//             if (array[i].precio < array[j].precio) {
//                 guardar = array[j].precio;
//                 array[j].precio = array[i].precio;
//                 array[i].precio = guardar;
//             }
            
//         }

//     }
//     console.log(newArray);
//     return newArray;
    
// }

// fruitsArray(fruits);