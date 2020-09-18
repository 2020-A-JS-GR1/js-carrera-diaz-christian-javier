const fs = require('fs');

console.log('First');
fs.readFile(// asincrone code
    './06-ejemplo.txt',
    'utf-8',
    (error,contenido) =>{//Callback (readfile)
        console.log('Second');
        if (error){
            console.log('Has error', error);
        }else{
            console.log(contenido);
        }

    }
);
console.log('Final');