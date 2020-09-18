//01-variables-ts
let naming :string = 'Javier';
//name =1;
naming = 'Jacienot';

// Duck Typing
// it's not neccessary to defined the type of variables en typescript
let age = 31;
let married: boolean = false;
let date:Date = new Date();
let salary: number;
salary = 12.4;
//but if you declare variables is necessary to defined type
//salary ='12.4';
let marihuana: any=2;// it's not well practice
marihuana ='2';
marihuana =true;
marihuana = () =>'2';

// any is a type of varible of any type

let multipleType: number | string = 2; //The operator | permits to declare more than one type of a variable.
multipleType ='2';
multipleType = 22;
multipleType ='two';

