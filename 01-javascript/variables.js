// Variables Tipe
/*
* Mutables e Inmutables
*
*
* */
// Mutables
var numberOne = 1;
let numberTwo = 2;

numberOne = 5;
numberTwo = 8;

numberOne = false;
numberTwo = true;
// Inmutables

const filesConfiguration = "PDF";
//filesConfiguration = "XML";

// Kind of Variables
const number = 1;//number
const salary = 1.7;//number
const text = "Adrian"; //string
const boleans = false;//boolean
const siblings = null;//object
const shoes = undefined;//undefined
const lastName = 'Carrera' //undefined
console.log(typeof number);
console.log(typeof salary);
console.log(typeof text);
console.log(typeof boleans);
console.log(typeof siblings);
console.log(typeof shoes);
console.log(typeof lastName);

if("a"){
    console.log("True");
}else{
    console.log("False");
}
if(-1){
    console.log("True");
}else{
    console.log("False");
}
if(0){
    console.log("True");
}else{
    console.log("False");
}
if(1){
    console.log("True");
}else{
    console.log("False");
}if(null){
    console.log("True");
}else{
    console.log("False");
}if(undefined){
    console.log("True");
}else{
    console.log("False");
}

/*
* Orden de importancia
*
* 1st "const"
* 2nd "let"
* 3rd X -> "var"
*
* */

// Objects JS(Json) - Array


const _javier ={
    name: "Javier",
    lastName: "Carrera",
    age: 25,
    siblings: null,
    shoes: undefined,
    married : false,
    pets: [
        "Canela", "Oddy", "Oreo"
    ],
    clothes: {
        color : "red",
        size : "XXL",
    }

};//object

const arrayNumber = []; //object
console.log(_javier);
console.log(arrayNumber);
console.log(_javier.pets);
console.log(_javier.clothes);
