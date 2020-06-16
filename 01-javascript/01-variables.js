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
console.log(_javier.clothes.color);

//Access properties of object
// First syntaxys
_javier.name;
_javier.clothes;
// Second syntaxis
_javier["nombre"]

// Display object
// _javier is inmutable variable but its property can change
/*
* What happend when the propertie not exist?
* you get undefined
* */

console.log(_javier);
_javier.name = "Christian";
console.log(_javier);
_javier["name"] = "Javier";
console.log(_javier.salary); //undefined
_javier.salary = 1.2;
console.log(_javier.salary); //1.2
_javier["expenses"] = 0.8;
console.log(_javier["expenses"]); //0.8
_javier["expenses"] = undefined;
console.log(_javier); //undefined
delete _javier.expenses
console.log(_javier); //undefined

// Object "class"

console.log(Object.keys(_javier)); //all key of a object "_javier"
console.log("Lao"+Object.keys(_javier).fill(null,0, 2)); //all key of a object "_javier"

/*
* Reference values and by value
*
* JS Values List
* number
* string
* boolean
* undefined
* These are value variables
* */

let ageChristian = 31;
let ageVicente = ageChristian;
console.log(ageChristian);
console.log(ageVicente);
ageChristian +=1;
console.log(ageChristian);
console.log(ageVicente);

/*
* Reference variables JS List
* Object
* Arrays
* */

let rafael = {
    name : "Rafael"
};
let lenin = rafael;
lenin.name = "Lenin";
console.log(rafael);
console.log(lenin);

delete rafael.name;
console.log(rafael);
console.log(lenin);

let rafael = {
    name : "Rafael"
};
let lenin = Object.assign({},rafael);
console.log(rafael);
console.log(lenin);
lenin.name = "Lenin";
delete rafael.name;
console.log(rafael);
console.log(lenin);
