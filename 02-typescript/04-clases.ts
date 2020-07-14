
class Person{
    public name:string;
    public last_name:string;
    static nameReference:string = 'Human';
    private nameAndLastName: string='';

    constructor(
        nameParameter:string,
        last_nameParameter:string,
    ) {
        this.name = nameParameter;
        this.last_name= last_nameParameter;
        this.nameAndLastName = this.name + ' '+ this.last_name
    }
    private showNameAndLastName(){
        return this.nameAndLastName;
    }
}

class User extends Person{
    constructor(
        nameParameter:string,
        last_nameParameter:string,
        public DNI:string,
        public civilState:string
    ) {
        super(nameParameter,last_nameParameter);
    }
}
const javier = new User(
   'javier',
    'carrera',
    '12328323',
    'alone'
);

console.log(javier.name)
console.log(javier.last_name)
console.log(javier.DNI)
console.log(javier.civilState)