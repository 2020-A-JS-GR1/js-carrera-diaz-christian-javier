const fs = require('fs');

function promiseIsEven(number) {
    const myFirstPromise = new Promise(
        (resolve, reject) => {
            if(number%2==0){
                resolve(number);
            }else{
                reject("Lesson");
            }
        }
    );
    return myFirstPromise;
}
function promiseExponentSquare(number) {
    const myFirstPromise = new Promise(
        (resolve, reject) => {
                const numberExpoSquare = Math.pow(number,2);
                resolve (numberExpoSquare);
        }
    );
    return myFirstPromise;
}
promiseIsEven(2)
    .then(
        (numberEven) => {
            console.log('Content then', numberEven);
            return promiseExponentSquare(numberEven);//promise!!!
        }
    ).then(
        (numberEvenSquare)=>{
            console.log("promiseExponentSquare", numberEvenSquare);
        }
    )
    .catch(
        (error) => {
            console.log('Content catch', error);
        }
    )

