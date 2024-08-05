const personas = [
    {
        nombre: "Alejandra",
        edad: 12

    },

    {
        nombre: "Martín",
        edad: 3

    },

    {
        nombre: "Francis",
        edad: 87

    }
];

// let suma = 0;
// personas.forEach(function(people) {  ------> otra manera
//     suma = suma + people.edad;
//     console.log(suma);
// });

const ageReturn = (array) => {
    let sumaEdad = 0;
 array.forEach(element => {
     sumaEdad = sumaEdad + element.edad;
 });
 return sumaEdad;
}

const print = `La suma de las personas es: ${ageReturn(personas)}`; // como hay return, hay que guardar ese return en una variable
console.log(print);
