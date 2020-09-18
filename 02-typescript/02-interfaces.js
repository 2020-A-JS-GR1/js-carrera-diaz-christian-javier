var _this = this;
// YOU CAN DEFINE FUNCTION INSIDE OF INTERFACES
// las interfaces permiten establecer contratos entre las variables de forma mas comoda para
// to code
var javier = {
    name: 'javier',
    last_name_: 'carrera',
    isMarried: false,
    salary: 12.54,
    state: "BN",
    printUser: function (message) {
        return 'Message is: ' + message;
    },
    computeTax: function (tax) {
        if (_this.salary)
            return tax * _this.salary + _this.salary;
        return 0;
    },
    currentState: function () {
        switch (_this.state) {
            case 'AC': return 'AP';
            case 'IN': return 'AF';
            case 'BN': return 'AT';
        }
    }
};
// you can't add more properties in an interface defined
