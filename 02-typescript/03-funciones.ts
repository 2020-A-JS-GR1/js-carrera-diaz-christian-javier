//03-funciones.ts

function addNumbers(
    initialNumber: number,
    ...numbersToAdd: number[]
): number{
    return initialNumber;
}

addNumbers(1,2,3,4,5);

function printMess(message:string):void{ //void function
    console.log('HI' + message)
}
// in this case void is for default in function

// how to type arrays

const arrayNumbers: number[] = [1,2,3];
const arrayNumbersTwo: Array<number> = [1,2,3];
const arrayNumbersThree: (number|string|boolean)[] = [1,'las',false];
const arrayNumbersFour: Array<number|string|boolean> = [1,'las',false];
let arrayNumberText: number[] | string[] = ['2','2'];

