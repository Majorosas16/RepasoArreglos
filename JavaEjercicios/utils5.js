const Familia1 = [
    {
        nombre: "Alejandra",
        edad: 12
    },

    {
        nombre: "Marcos",
        edad: 56
    }
];

const Familia2 = [

    {
        nombre: "Martín",
        edad: 3

    },

    {
        nombre: "Ester",
        edad: 9

    }
];

//no pude y lo saqué de chat gpt

function newPeopleArray(array1, array2) {
    const newArray = [];

    for (let i = 0; i < (array1.length + array2.length); i++) {


        const persona1 = array1[i] || { nombre: null, edad: null };
        const persona2 = array2[i] || { nombre: null, edad: null };
        
        newArray.push({
            nombre1: persona1.nombre,
            edad1: persona1.edad,
            nombre2: persona2.nombre,
            edad2: persona2.edad
        });
    }
    
    return newArray;
        
    }

    const personasCombinadas = newPeopleArray(Familia1, Familia2);
    console.log(personasCombinadas);