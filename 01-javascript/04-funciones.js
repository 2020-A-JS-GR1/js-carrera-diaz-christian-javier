// 04-funciones.js

function onlyNumbers(a,b,c){
    return a + b +c; // return a value
}

function onlyNumbers(a,b,c){// return undefined
    console.log(a, b, c);
}
// In javascript dont have a sense in the function when you send parameters
onlyNumbers("c", true, 1);

// named Functions

function functionNamed(){}
functionNamed();

const namedFunctionTwo = function (){}; // Anonymous Functions without name
var namedFunctionThree = function (){};
let namedFunctionFour = function (){};
namedFunctionTwo();
namedFunctionThree();
namedFunctionFour();


const namedFunctionFive = () =>{}; // Fat arrow Functions
// omit return and {} when return in one line
const namedFunctionSix = x => x+1; // Fat arrow Functions
// omit () when have a variable
const namedFunctionSeven = (x) =>{return x+1}; // Fat arrow Functions
const namedFunctionSeven = (x,y,z) => x + y + z; // Fat arrow Functions

function ALotNumber(initialNumber, ...othersNumber){// inf[] parameters
    return initialNumber + othersNumber.reduce((a,v)=> a+v,0);
}

console.log("ALotNumber(1,2,3,4,5,65,2);", ALotNumber(1,2,3,4,5,65,2));