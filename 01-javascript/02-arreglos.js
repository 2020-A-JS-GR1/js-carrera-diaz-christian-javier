const array = [1,2,3,4,5,6,7,8,9,10];

//array = 1

const everyArray = [
    true, 1, 1.2, "Adrian", undefined, null, {},[1, 2, true, "A"]
];

// for of
// get values

for( let number of array){
    console.log('number', number);
}

// for in
// get index
for( let number in array){
    console.log('number', number);
}

array.push(11); //add item to the end of array
array.pop(); //delete item of end of array
array.unshift(0); //add to begin of array

array.splice(0,1);// can to delete items inside of array
// array.splice
array.splice(0,0,3,4,5); // add items inside of array from position indicated

// search any item
const index = array.indexOf(9); // Get a index of object indicated in the first position that finds it
// if the item isn't found this function returns -1