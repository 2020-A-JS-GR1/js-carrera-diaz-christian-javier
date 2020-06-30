// Destructation


const adrian ={
    name : "Christian"
};
const carolina  = {
    name : "Carolina",
    lastName:"Carrera"
};

// Create a new reference and not affect the source object
const adrian_carolina = {
    ...adrian,
    ...carolina,
};

adrian_carolina.name = "Carlos";
console.log("adrian_carolina", adrian_carolina);
console.log("adrian", adrian);
// If existe the same attributes, this takes the attributs of the objetc

const arrayOne = [1, 2,3,4 ,5];
const arrayTwo = [6,7,8,9,10];
const superArray = [
    ...arrayOne,
    ...arrayTwo
];
superArray[0] = 100;
console.log("superArray", superArray);
console.log("arrayOne", arrayOne);
