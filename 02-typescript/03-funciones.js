//03-funciones.ts
function addNumbers(initialNumber) {
    var numbersToAdd = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbersToAdd[_i - 1] = arguments[_i];
    }
    return initialNumber;
}
addNumbers(1, 2, 3, 4, 5);
function printMess(message) {
    console.log('HI' + message);
}
// in this case void is for default in function
// how to type arrays
var arrayNumbers = [1, 2, 3];
var arrayNumbersTwo = [1, 2, 3];
var arrayNumbersThree = [1, 'las', false];
var arrayNumbersFour = [1, 'las', false];
var arrayNumberText = ['2', '2'];
