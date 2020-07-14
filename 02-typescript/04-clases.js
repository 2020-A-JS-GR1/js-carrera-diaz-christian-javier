var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(nameParameter, last_nameParameter) {
        this.nameAndLastName = '';
        this.name = nameParameter;
        this.last_name = last_nameParameter;
        this.nameAndLastName = this.name + ' ' + this.last_name;
    }
    Person.prototype.showNameAndLastName = function () {
        return this.nameAndLastName;
    };
    Person.nameReference = 'Human';
    return Person;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(nameParameter, last_nameParameter, DNI, civilState) {
        var _this = _super.call(this, nameParameter, last_nameParameter) || this;
        _this.DNI = DNI;
        _this.civilState = civilState;
        return _this;
    }
    return User;
}(Person));
var javier = new User('javier', 'carrera', '12328323', 'alone');
console.log(javier.name);
console.log(javier.last_name);
console.log(javier.DNI);
console.log(javier.civilState);
