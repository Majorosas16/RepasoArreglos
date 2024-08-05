const students = [
    {
        nombre: "Maria",
        cal: 2

    },

    {
        nombre: "Alexander",
        cal: 4.5

    },

    {
        nombre: "Massi",
        cal: 3

    },

    {
        nombre: "Julieta",
        cal: 3.2

    }

];

function returnName(array,name) {
    let result;
    array.forEach(element => {
        if (name === element.nombre) {
            result = element;
        } 
    });
    return result;
}

const estudiante = returnName(students, "Julieta");
if (estudiante) { //Si estudiante tiene algo entonces haga eso
    const print3 = `El estudiante encontrado es: ${estudiante.nombre}, Calificación: ${estudiante.cal}`;
    console.log(print3);
} else { //Si estudiante tiene undefined entonces
    console.log(null);
    
}