/*
*
* Nombre: Christian Carrera
*
* Enunciado:
*Utilizando el arreglo de la clase vamos a realizar las siguientes operaciones:


Por cada vocal dentro de la palabra del estudiante 0.1 decimas
Por cada consonante dentro de la palabra del estudiante 0.05 decimas

Filtren cuales personas pasaron
*
* */

const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

// Un arreglo con las vocales
const vowels = ["a", "e", "i", "o", "u"];

const arrayMap = arreglo.map(
    (currentValue) => {
        // Realizo una copia del item currentValue
        const student = Object.assign({},currentValue);
        // Tomo el nombre como un array de strings
        for (let letter of currentValue.nombre) {
            // Realizo la valdicación con el array de las vocales
            if (vowels.find(vowel => vowel === letter)) {
                student.nota = Number.parseFloat(student.nota + 0.1).toPrecision(3) ;
            }else {
                student.nota = Number.parseFloat(student.nota + 0.05).toPrecision(3) ;
            }
        }
        return student;
    }
).filter(student => student.nota >= 14.0 );// Hago el filtro de los estudiantes

console.log("Array Original", arreglo);
console.log("Array de estudiantes aprobados: ", arrayMap);
