const fs = require('fs');

function promiseWrite(path, newContent) {
    const WritePromise = new Promise(
        (resolve, reject) => {
            fs.writeFile(path, newContent, 'utf-8', (err) => {
                if (err) throw reject(err);
            });
        }
    );
}

function promiseLecture(path) {
    const LecturePromise = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (err, data) => {
                    if (err) throw reject(err);
                    resolve(data);
                });
        }
    );
    return LecturePromise;
}

function ejercicio(path, newContent){
    promiseLecture(path)
        .then(
            (data) =>{
                console.log(data);
                return promiseWrite(path, data+ newContent+"\n");
            }
        )
        .then(
            ()=>{return promiseLecture(path);}
        )
        .then(
            (data) => {
                console.log(data);
            }
        )
        .catch(
            (error) => {
                console.log('Content catch', error);
            }
        )
}
ejercicio('./06-ejemplo.txt', "Hello World");