const fs = require('fs');

/*
* To make a function accepts how parameters a variable
* with path file and content to add in the file
* The function should take these two parameters and read the file
* and add text to end of file
* */

function writeFile(path, newContent) {
    fs.readFile(
        path,
        'utf-8',
        (err, data) => {
            console.log(data);
            if (err) throw err;
            fs.writeFile(path, data +"\n"+ newContent, 'utf-8', (err) =>{
                if (err) throw err;
                console.log('Replaced!');
            });
        });
}

writeFile('./06-ejemplo.txt', "Buenas Tardes");