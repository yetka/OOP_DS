var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//creating blueprint for stacks
var Stack = /** @class */ (function () {
    //to set optional parameters we can use '?' character after it, so ther will bo no arity error but we still need if statement in case thare will be no parameter
    function Stack(newArray) {
        this.array = [];
        this.length = 0;
        if (newArray) {
            this.array = newArray;
            this.length = newArray.length;
        }
    }
    //get the number of elements in the array
    Stack.prototype.getSize = function () {
        return this.length;
    };
    //add elements to the end
    Stack.prototype.push = function (newItem) {
        this.array[this.length] = newItem;
        this.length = this.length + 1;
    };
    //remove elements from the end, type is T or any since Error must be of type any or object
    Stack.prototype.pop = function () {
        if (this.length == 0) {
            return new Error();
        }
        else {
            this.length = this.length - 1;
            var temp = this.array[this.length];
            this.array[this.length] = null;
            return temp;
        }
    };
    //change it into double-ended queue by adding dequeue() method
    Stack.prototype.dequeue = function () {
        this.length = this.length - 1;
        var temp = this.array[0];
        for (var i = 1; i <= this.length; i++) {
            this.array[i - 1] = this.array[i];
        }
        this.array[this.length] = null;
        return temp;
    };
    //dequeue method without shifting, with tail and head (linked list)
    Stack.prototype.dequeueVersion2 = function () {
        var temp = this.array[0];
        this.head = this.array[1];
        this.tail = this.array[this.array.length - 1];
        return temp;
    };
    //method to easier dispaly stack in console
    Stack.prototype.debugPrint = function () {
        console.log(this.array);
    };
    return Stack;
}());
//option with stack contains numbers
var myStackWithNumbers = new Stack();
console.log(myStackWithNumbers);
console.log(myStackWithNumbers.getSize());
try {
    var popResult = myStackWithNumbers.pop();
    if (popResult instanceof Error) {
        throw Error("Array is empty");
    }
}
catch (error) {
    console.log(error.message);
}
console.log(myStackWithNumbers.pop());
myStackWithNumbers.push(1);
myStackWithNumbers.push(3);
myStackWithNumbers.push(4);
myStackWithNumbers.debugPrint();
console.log(myStackWithNumbers.getSize());
myStackWithNumbers.pop();
myStackWithNumbers.debugPrint();
myStackWithNumbers.pop();
myStackWithNumbers.debugPrint();
console.log(myStackWithNumbers.dequeue());
myStackWithNumbers.debugPrint();
//option with stack contains strings
var arrayOfStrings = ["banana", "apple", "strawberry", "coconut"];
var myStackWithStrings = new Stack(arrayOfStrings);
myStackWithStrings.debugPrint();
console.log(myStackWithStrings.getSize());
myStackWithStrings.pop();
myStackWithStrings.debugPrint();
myStackWithStrings.push("lemon");
myStackWithStrings.debugPrint();
console.log(myStackWithStrings.dequeue());
myStackWithStrings.debugPrint();
//<-------------ABSTRACT CLASSES AND FUNCTIONS
//cannot create intances of abstract class, they are dedicated to be inherited
var Home = /** @class */ (function () {
    function Home() {
        this.address = "default";
    }
    return Home;
}());
var Room = /** @class */ (function (_super) {
    __extends(Room, _super);
    function Room() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Room.prototype.setAddress = function (newAddress) {
        this.address = newAddress;
    };
    return Room;
}(Home));
var mainRoom = new Room();
mainRoom.setAddress("Edmonds");
console.log(mainRoom);
//<-------------INHERITANCE AND SUPER()
var Dog = /** @class */ (function () {
    function Dog(breed, name, age) {
        if (breed === void 0) { breed = "mixed"; }
        if (name === void 0) { name = "Nuca"; }
        this.breed = breed;
        this.name = name;
        this.age = age;
    }
    ;
    return Dog;
}());
var CockerSpaniel = /** @class */ (function (_super) {
    __extends(CockerSpaniel, _super);
    function CockerSpaniel(name, age) {
        return _super.call(this, "cocker spaniel", name, age) || this;
    }
    return CockerSpaniel;
}(Dog));
var ruda = new CockerSpaniel("Ruda", 14);
console.log(ruda);
//<----------------NAMESPACES (export statement is necessary)
var Cat;
(function (Cat) {
    function meowing() {
        return "meowwwwwwwww!";
    }
    Cat.meowing = meowing;
    function purring() {
        return "puuuuurrrr";
    }
    Cat.purring = purring;
})(Cat || (Cat = {}));
console.log(Cat.purring());
//<---------------STATIC PROPERTY TYPE (access without instatializing)
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.PI = 3.14;
    Helper.freezingPiontCelcius = 0;
    return Helper;
}());
console.log(Helper.PI);
function animalTypeChecker(animal) {
    return animal.type;
}
var pysia = {
    type: "cat",
    breed: "european",
    age: 10
};
//to implement interface in Class we need keyword `implements` 
var Zoo = /** @class */ (function () {
    function Zoo() {
    }
    return Zoo;
}());
console.log(animalTypeChecker(pysia));
var myAddFunc;
myAddFunc = function (value1, value2) {
    return value1 + value2;
};
console.log(myAddFunc(4, 7));
//transforming values into numbers by adding `+` in front of it
console.log(+'54');
console.log(+true);
console.log(+false);
//changing array length
var customArray = [1, 2, 3, 4, 5];
console.log(customArray);
console.log(customArray.length);
customArray.length = 4;
console.log(customArray);
console.log(customArray.length);
customArray.length = 2;
console.log(customArray);
console.log(customArray.length);
/*
 * Convert this to generics in TS.
 * Make this a double-ended queue by adding a dequeue() method
 * Copy constructor (convert existing array into your Stack type). I used optional parameters in constructor.
 
 
 * public dequeueVersion2() without shifting and using tail and head (linked list)
 * pass by value and pass by reference
 * multiple inheritance issue (C++ exception)
 * nested class
 * composition
 * inheritance "is a relationship" vs "has a relationship"
 * interfaces vs abstract classes
 * benefits of generics (type safety)
 * polymorphism
 * static
 * primitives
 * linked list stack using stack interface, without shifting
 */
