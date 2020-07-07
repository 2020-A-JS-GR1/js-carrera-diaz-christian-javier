const inquirer = require('inquirer');

async function main() {
   try{
       const answer = await inquirer
           .prompt([
               {
                   type: 'input',
                   name: 'last_name',
                   message: 'Input your name:'
               },
               {
                   type: 'input',
                   name: 'age',
                   message: 'Input your age:'
               }
           ]);
       console.log('answer',answer);
   }catch (e) {
       console.log('Error',e);

   }
}

main();