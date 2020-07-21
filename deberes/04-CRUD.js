/* Declare of libraries
* **********************************************OJO*****************************************************
*                                   It's necessary to install readline-sync  */
// User Object
/*let user ={
    DNI: '',
    name: '',
    last_name:'',
    age: 0,
    isMarried: false,
    computers: []
};*/

/*let computer={
    id : 0,
    model: '',
    brand: '',
    price:'',
    isNew:false,
};*/


const inquirer = require('inquirer');
const fs = require('fs');
const readline = require('readline-sync')
/* ***************************************Global variables********************************* */
// Address
let pathUsers = './users.json';
let pathComputers = './computers.json';

// Users
function connectToUser() {
    let users = promiseLecture(pathUsers).then((data) => {
        let empty = []
        if (data.toString() === "")
            return empty
        return Array.from(JSON.parse(data))
    });
    return users;
}

//Computer
function connectToComputer() {
    let computers = promiseLecture(pathComputers).then((data) => {
        let empty = []
        if (data.toString() === "")
            return empty;
        return Array.from(JSON.parse(data))
    });
    return computers;
}

/* ***********************************************Menus************************************ */
async function mainMenu() {
    let optionChose;
    console.log("\n**************Welcome to Management Computers System**************")
    do {
        optionChose = readline.question("\n[1] Management Computers" +
            "\n[2] Management Users" +
            "\n-> Choose any option for exit write \"e\"\n");
        switch (optionChose) {
            case "1":
                await computerManagement()
                break;
            case "2":
                await usersManagement();
                break;
            case "e":
                console.log(`Thank you for using our service`);
                break;
            default:
                console.log("The option is incorrect, please try again!!");
        }
    } while (optionChose !== 'e');
}

async function computerManagement() {
    let option;
    do {
        console.log("\n**************Computers Management**************");
        option = readline.question("\n[1] Create a new Computer" +
            "\n[2] Read all Computer" +
            "\n[3] Update a Computer" +
            "\n[4] Delete a Computer" +
            "\n-> Choose any option for exit write \"e\"\n");
        switch (option) {
            case "1":
                await connectToComputer().then(
                    async (data) => {
                        try {
                            let answers = data;
                            answers.push(await createComputer());
                            return answers;
                        } catch (e) {
                            console.log("Error: " + e)
                        }
                    }
                ).then(
                    async (data) => {
                        return promiseWrite(pathComputers, JSON.stringify(data));
                    }
                ).catch(
                    (err) => {
                        console.log("Error, please check ", err)
                    }
                )
                break;
            case "2":
                await connectToComputer().then((data) => {
                    console.log("All computers in database:\n");
                    for (let object of data)
                        console.log("[" + data.indexOf(object) + "] -->" + JSON.stringify(object));
                }).catch(
                    (err) => {
                        console.log("Error " + err)
                    }
                );
                break;
            case "3":
                await updateOrDeleteComputer("u");
                console.log("The data was updated successful!! \n");
                break;
            case "4":
                await updateOrDeleteComputer("d");
                console.log("The data was deleted successful!! \n");
                break;
            case "e":
                console.log(`Thank you for using our service`);
                break;
            default:
                console.log("The option is incorrect, please try again!!");
                break;
        }
    } while (option !== "e");
}

async function usersManagement() {
    let option;
    do {
        console.log("\n**************Users Management**************");
        option = readline.question("\n[1] Create a new user" +
            "\n[2] Read all users" +
            "\n[3] Update an user" +
            "\n[4] Delete an user" +
            "\n-> Choose any option for exit write \"e\"\n");
        switch (option) {
            case "1":
                await connectToUser().then(
                    async (data) => {
                        let answers = data;
                        let newUser = await createUser()
                        try {
                            let i=0;
                            for(let computer of newUser["computers"]) {
                                newUser["computers"][i] = JSON.parse(computer)
                                i++;
                            }
                            answers.push(newUser);
                            return answers;
                        } catch (e) {
                            answers.push(newUser);
                            return answers;
                        }
                    }
                ).then(
                    async (data) => {
                        return promiseWrite(pathUsers, JSON.stringify(data));
                    }
                ).catch(
                    (err) => {
                        console.log("Error, please check ", err)
                    }
                )
                break;
            case "2":
                await connectToUser().then((data) => {
                    console.log("All users in database:\n");
                    for (let object of data)
                        console.log("[" + data.indexOf(object) + "] -->" + JSON.stringify(object));
                }).catch(
                    (err) => {
                        console.log("Error " + err)
                    }
                );
                break;
            case "3":
                await updateOrDeleteUsers("u");
                console.log("The data was updated successful!! \n");
                break;
            case "4":
                await updateOrDeleteUsers("d");
                console.log("The data was deleted successful!! \n");
                break;
            case "e":
                console.log(`Thank you for using our service`);
                break;
            default:
                console.log("The option is incorrect, please try again!!");
                break;
        }
    } while (option !== "e");
}

/* ********************************Create Users And Computers******************************* */

// Class Computer
async function createComputer() {
    try {
        const computer = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: '\n(1)Input computer\'s ID:',
                    validate: function (value) {
                        let pass = value.match(
                            /([0-9])\w+/g
                        );
                        if (pass) return true;
                        return 'Please insert a correct computer\'s number';
                    }
                },
                {
                    type: 'input',
                    name: 'model',
                    message: '(2)Input computer\'s model:'
                },
                {
                    type: 'input',
                    name: 'brand',
                    message: '(3)Input computer\'s brand:'
                },
                {
                    type: 'input',
                    name: 'price',
                    message: '(4)Input computer\'s price:',
                    validate: function (value) {
                        let pass = value.match(
                            /(\d*)[.]?(\d*)\d+/g
                        );
                        if (pass) return true;
                        return 'Please insert a correct computer\'s price'
                    }
                },
                {
                    type: 'list',
                    name: 'isNew',
                    message: '(5)The computer is new?',
                    default: () => {
                        return false
                    },
                    choices: ['true', 'false'],
                    validate: (value) => {
                        switch (value) {
                            case 'true':
                                return true;
                            case 'false':
                                return false
                        }
                    }
                }
            ]);
        console.log('Have created a new computer: \n', computer);
        return computer;
    } catch (e) {
        console.log('Error', e);
    }
}

// Class User
async function createUser() {
    try {
        let list = await connectToComputer();
        let listcomputers = []
        for (let computer of list)
            listcomputers.push(JSON.stringify(computer));
        const user = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'DNI',
                    message: 'Hello to Users Register System\n(1)Input user\'s DNI:',
                    validate: function (value) {
                        let pass = value.match(
                            /[0-9]\d{10,10}/g
                        );
                        if (pass) return true;
                        return 'Please insert a correct user\'s DNI';
                    }
                },
                {
                    type: 'input',
                    name: 'name',
                    message: '(2)Input user\'s name:'
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: '(3)Input user\'s last name:'
                },
                {
                    type: 'input',
                    name: 'age',
                    message: '(4)Input user\'s age:',
                    validate: function (value) {
                        let pass = value.match(
                            /^[0-9]\d+/g
                        );
                        if (pass) return true;
                        return 'Please insert a correct user\'s age'
                    }
                },
                {
                    type: 'list',
                    name: 'isMarried',
                    message: '(5)Are you married?',
                    default: () => {
                        return false
                    },
                    choices: ['true', 'false'],
                    validate: (value) => {
                        switch (value) {
                            case 'true':
                                return true;
                            case 'false':
                                return false
                        }
                    }
                }, {
                    type: 'checkbox',
                    name: 'computers',
                    message: '(6)What are yours computers?',
                    choices: listcomputers,

                },
            ]);
        console.log('Have created a new user:\n', user);
        return user;
    } catch (e) {
        console.log('Error', e);

    }
}

/* ********************************Update Users And Computers******************************* */
async function updateOrDeleteComputer(option) {
    try {
        await connectToComputer().then(
            async (data) => {
                for (let object of data)
                    console.log("[" + data.indexOf(object) + "] -->" + JSON.stringify(object));
                try {
                    let updated = readline.question("\nChoose any one!!\n");
                    if (Number.parseInt(updated) || Number.parseInt(updated)===0) {
                        data.splice(Number.parseInt(updated) === 0 ? 0 : (Number.parseInt(updated)), Number.parseInt(updated));
                        if (option === "u")
                            data[Number.parseInt(updated)] = await createComputer();
                    }
                } catch (e) {
                    console.log("Error, please try again", e)
                }
                return data;
            }).then(
            async (data) => {
                return promiseWrite(pathComputers, JSON.stringify(data));
            }
        );
    } catch (e) {
        console.log('Error', e);
    }
}

async function updateOrDeleteUsers(option) {
    try {
        await connectToUser().then(
            async (data) => {
                for (let object of data)
                    console.log("[" + data.indexOf(object) + "] -->" + JSON.stringify(object));
                try {
                    let updated = readline.question("\nChoose any one!!\n");
                    if (Number.parseInt(updated) || Number.parseInt(updated)===0) {
                        data.splice(Number.parseInt(updated) === 0 ? 0 : (Number.parseInt(updated)), Number.parseInt(updated));
                        if (option === "u") {
                            let updateUser = await createUser();
                            try {
                                let i=0;
                                for(let computer of updateUser["computers"]){
                                    updateUser["computers"][i] = JSON.parse(computer)
                                    i++;
                                }
                                data[Number.parseInt(updated)] = updateUser;
                            } catch (e) {
                                data[Number.parseInt(updated)] = updateUser;
                            }
                        }
                    }
                } catch (e) {
                    console.log("Error, please try again", e)
                }
                return data;
            }).then(
            async (data) => {
                console.log("The data was updated successful!! \n", data);
                return promiseWrite(pathUsers, JSON.stringify(data));
            }
        );
    } catch (e) {
        console.log('Error', e);
    }
}

mainMenu();



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
