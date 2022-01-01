// boolen
var isCool = true;
// number
var age = 56;
// string
var eyecolor = "brown";
var favouriteQuote = "I'm not old, i'm only ".concat(age);
// array
var pets = ["beg", "floor", "bed"];
var pets2 = ["lion", "dragon", "lizard"];
// object
var wizard = {
    a: "John"
};
// null and undefined
var meh = undefined;
var noo = null;
// tuple
var basket;
basket = ["basketball", 7];
// enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
// any - !!!!!! BE CAREFUL
var whatever = "aghhhh nooo!!!";
whatever = 5;
// void
var sing = function () {
    console.log("lalalalllala");
};
// never
var error = function () {
    throw Error("oops");
};
var fightRobotArmy = function (robots) {
    console.log("FIGHT");
};
var fightRobotArmy2 = function (robots) {
    console.log("FIGHT");
};
var dog = {};
dog.count;
// function
var fightRobotArmy3 = function (robots) {
    console.log("FIGHT");
};
var fightRobotArmy4 = function (robots) {
    console.log("FIGHT");
    return 5;
};
// classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'alalalla';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal('RAARRR');
lion.greet();
lion.sing;
// union
var confused = true;
