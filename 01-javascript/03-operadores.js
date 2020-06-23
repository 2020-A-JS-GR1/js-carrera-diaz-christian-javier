const array = [
    {
        id: 1,
        name: "Javier",
        grade: 8
    },
    {
        id: 2,
        name: "Nicole",
        grade: 17
    },
    {
        id: 3,
        name: "Javis",
        grade: 12
    },
    {
        id: 4,
        name: "Kilo",
        grade: 20
    },
    {
        id: 5,
        name: "Sarco",
        grade: 18
    },
    {
        id: 6,
        name: "Mina",
        grade: 17
    },
    {
        id: 7,
        name: "Lico",
        grade: 19
    },
    {
        id: 8,
        name: "Michelle",
        grade: 18
    },
    {
        id: 9,
        name: "Mario",
        grade: 11
    },
    {
        id: 10,
        name: "Marco",
        grade: 12
    }

];

// Parameters functions

// Find
// Return a expression how true or false
const answerFind = array.find(
    function (currentValue, currentIndex, completeArray){
        console.log('currentValue', currentValue);
        console.log('currentValue', currentIndex);
        console.log('completeArray', completeArray);
        return currentValue.name === 'Kilo';
    }
);

// Findindex
// returns a index of item
const answerFind0 = array.findIndex(
    function (currentValue, currentIndex, completeArray){
        console.log('currentValue', currentValue);
        console.log('currentValue', currentIndex);
        console.log('completeArray', completeArray);
        return currentValue.name === 'Kilo';
    }
);

console.log("answerFind", answerFind); // undefined


// FOREACH
// Dont return nothing only iterate of array
// Always return undefined

const answerFind1 = array.forEach(
    function (currentValue, currentIndex, completeArray){
        console.log('currentValue', currentValue);
        console.log('currentValue', currentIndex);
        console.log('completeArray', completeArray);
        return currentValue.name === 'Kilo';
    }
);

console.log("answerFind", answerFind); // undefined

// MAP
// return a new element
// return a new array with this operator

const answerMap = array.map(
    function (currentValue, currentIndex, completeArray){
        return {
            id: currentValue.id,
            name: currentValue.name,
            grade: currentValue.grade
        };
    }
);
// anonymous function that don't have a name
// array function fat =>

console.log("answerMap", answerMap); // undefined
console.log("array", array);
const answerMapNew = array.map(
    /*function (currentValue, currentIndex, completeArray){
        return currentValue.grade;
    }*/
    (currentValue, currentIndex, completeArray) =>{
        return currentValue.grade;
    }
);
console.log("array", array);
console.log("answerMap", answerMap); // undefined


// Filter
// return a expression how true or false

const answerFilter = array.filter(
    /*function (currentValue, currentIndex, completeArray){
        return currentValue.grade;
    }*/
    (currentValue, currentIndex, completeArray) =>{
        return currentValue.grade >=14;
    }
);
console.log("array", array);
console.log("answerFilter", answerFilter);
// There are some grades less than 9
// OR
//some -> expression
const asnwerSome = array
    .some(
        (currentValue, currentIndex, allArray) =>{
            return currentValue.grade < 9;
        }
    );

console.log("answerSome", asnwerSome);

// There are some grades less than 9
// AND
//EVERY -> expression
const asnwerAny = array
    .every(
        (currentValue, currentIndex, allArray) =>{
            return currentValue.grade > 14;
        }
    );
console.log("answerAny", asnwerAny);

// reduce -> expression
// reduceRight -> right - left
// reduce -> left - right

const answerReduce = array
    .reduce(
        (Accumulator , currentValue ) =>{
            return  Accumulator - currentValue.grade;
        },
        500 // Accumulator
    );
console.log("answerReduce", answerReduce);

// Exercise

const answer = array
.map((v)=>v.grade * 1.3) // add 30%
.filter((nota) =>nota<9)

const anwerReduceNew = answer
    .reduce((accumulator, current) => accumulator + current,0);

const gradeAverage = answerReduce / answer.length;
console.log("gradeAverage", gradeAverage);