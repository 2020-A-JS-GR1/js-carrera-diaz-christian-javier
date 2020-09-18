//02-interfaces.ts
interface User {
    name: string;
    last_name_: string;
    age?: number; //optional
    salary?: number; //optional
    isMarried: boolean | 0 | 1;
    state: 'AC' | 'IN' | 'BN';
    printUser: (message:string) => string | 'BN';
    computeTax: (tax:number) => number;
    currentState: () =>  'AP'| 'AF' | 'AT';
    // FUNCTION ACCEPTED A PARAMETER NUMBER IMPUESTO AND SALARY
    // NO RECIVE PARAMETERS BUT RETURN 'AP' 'AF' 'AT'
}
// YOU CAN DEFINE FUNCTION INSIDE OF INTERFACES

// las interfaces permiten establecer contratos entre las variables de forma mas comoda para
// to code
const javier : User |number ={
    name: 'javier',
    last_name_: 'carrera',
    isMarried :false,
    salary: 12.54,
    state: "BN",
    printUser : (message:string) => {
        return 'Message is: '+ message;
    },
    computeTax: (tax:number) =>{
        if(this.salary) return  tax*this.salary+this.salary;
        return 0;
    },
    currentState: ()=>{
       switch (this.state){
           case 'AC': return 'AP';
           case 'IN': return 'AF';
           case 'BN': return 'AT';
       }
    }

}
// you can't add more properties in an interface defined


