// Este deber lo hice en el archivo 10-async-wairs pero lo traslade aqui en para comodidad
// libraries
const fs = require('fs');

// Promises
function readFile(path) {
    const readFilePromise = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (err, data) => {
                    if(err){
                        reject(err);
                    }else{
                        resolve(data);
                    }
                });
        });
    return readFilePromise;
}

function writeFile(path, newContent) {
    const writeFilePromise = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                newContent,
                'utf-8',
                (err) => {
                    if(err) reject(err);
                });
        });
}

// ASYNC AWAIT works inside of function
// Anonymous and Named Function
//always uses a try and catch block
async function exercise(path, newContent) {
    console.log("1");
    try {
        const currentContent = await readFile(path);
        await writeFile(path,currentContent+"\n"+newContent);
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
        const currentContent = await readFile(path);
        await writeFile(path,currentContent+"\n"+newContent);
        const newCurrentContent = await readFile(path);
        console.log(newCurrentContent);
    } catch (e) {
        console.log("Error: " + e);
    }
}
