// libraries
const fs = require('fs');

// Promises

const readFilePromise = new Promise(
    (res, rej) => {
        rej("error =(')")
    });

const writeFilePromise = new Promise(
    (res, rej) => {
        rej("error =(')");
    });

// ASYNC AWAIT works inside of function
// Anonymous and Named Function
//always uses a try and catch block
async function exercise(path, newContent) {
    console.log("1");
    try {
        const currentContent = await readFile(path);
        await writeFile(path, currentContent + "\n" + newContent);
        const newCurrentContent = await readFile(path);
        console.log(newCurrentContent);
    } catch (e) {
        console.log("Error: " + e);
    }
}

// call function

exercise('./06-ejemplo.txt', "Buenos dias people")

//const f = async ()=>{/*Content*/} Another form


async function exercise(path, newContent) {
    console.log("1");
    try {
        console.log("2");
        const currentContent = await readFilePromise;
        await readFilePromise;
        const newCurrentContent = await writeFilePromise;
        await writeFilePromise;
        console.log("3");
        console.log(newCurrentContent);
        console.log("4");
    } catch (e) {
        console.log("Error: " + e);
    }
    console.log("6");
    console.log("7");
}

const answerExercise = exercise();
console.log("answerExercise", answerExercise);

// any function with  asyn return a promise and the promise return a promise

