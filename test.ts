//creating blueprint for stacks
class Stack<T> {
  private array: T[] = [];
  private length: number = 0;
  private head: T;
  private tail: T;

  //to set optional parameters we can use '?' character after it, so ther will bo no arity error but we still need if statement in case thare will be no parameter
  constructor(newArray?: T[]) {
    if (newArray) {
      this.array = newArray;
      this.length = newArray.length;
    }  
  }
  
  
  //get the number of elements in the array
  public getSize(): number {
    return this.length;
  }

  
  //add elements to the end
  public push(newItem: T): void {
    this.array[this.length] = newItem;
    this.length = this.length + 1;
  }
  
  
  //remove elements from the end, type is T or any since Error must be of type any or object
  public pop(): T | any {
  
    if(this.length == 0) {
      return new Error()
  
    } else {
  
      this.length = this.length - 1;
      let temp = this.array[this.length];
      this.array[this.length] = null;
      return temp;
    }
  
  }
  
  //change it into double-ended queue by adding dequeue() method
  public dequeue(): T {
    this.length = this.length - 1;
    let temp = this.array[0];
    for (let i = 1; i <= this.length; i++) {
      this.array[i-1] = this.array[i];
    }
    this.array[this.length] = null;
    return temp;
  }
  
  //dequeue method without shifting, with tail and head (linked list)
  public dequeueVersion2():T {
    let temp = this.array[0];
    this.head = this.array[1];
    this.tail = this.array[this.array.length - 1];
    return temp
}
   
   
   
  //method to easier dispaly stack in console
  public debugPrint(): void {
    console.log(this.array);
  }
}

//option with stack contains numbers
let myStackWithNumbers = new Stack<number>();

console.log(myStackWithNumbers);
console.log(myStackWithNumbers.getSize());


try {
   let popResult = myStackWithNumbers.pop();
   if (popResult instanceof Error) {
     throw Error("Array is empty")
   }
} catch(error) {
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
let arrayOfStrings = ["banana", "apple", "strawberry", "coconut"];
let myStackWithStrings = new Stack<string>(arrayOfStrings);

myStackWithStrings.debugPrint();
console.log(myStackWithStrings.getSize());
myStackWithStrings.pop();
myStackWithStrings.debugPrint();
myStackWithStrings.push("lemon");
myStackWithStrings.debugPrint();
console.log(myStackWithStrings.dequeue());
myStackWithStrings.debugPrint();


//<-------------ABSTRACT CLASSES AND FUNCTIONS

//cannot create intances of abstract class, they are dedicated to be inherited only
abstract class Home {
  address: string = "default";
  
  abstract setAddress(newAddress:string):void;
}

class Room extends Home {
  setAddress(newAddress:string): void {
    this.address = newAddress;
  }
}

let mainRoom = new Room();
mainRoom.setAddress("Edmonds");
console.log(mainRoom);

//<-------------INHERITANCE AND SUPER()
class Dog {
  
  constructor(protected breed:string = "mixed", protected name:string = "Nuca", public age:number) {};
  
}

class CockerSpaniel extends Dog {
  constructor(name, age) {
    super("cocker spaniel", name, age);
  }
}

let ruda = new CockerSpaniel("Ruda", 14);
console.log(ruda);

//<----------------NAMESPACES (export statement is necessary)
namespace Cat {
  export function meowing() {
    return "meowwwwwwwww!";
  }
  export function purring() {
    return "puuuuurrrr";
  }
}

console.log(Cat.purring());

//<---------------STATIC PROPERTY TYPE (access without instatializing)
class Helper {
  static PI:number = 3.14;
  static freezingPiontCelcius:number = 0;
}
console.log(Helper.PI);

//<--------------INTERFACES (as contracts for objects, classes, methods parameters or methods types ) 
interface Animal {
  type: string,
  breed?: string, //for optional property 
  [propertyName: string]: any //flexible key in [] if we don't know the name of the property ahead
}

function animalTypeChecker( animal: Animal) {
  return animal.type;
}

const pysia = {
  type: "cat",
  breed: "european",
  age: 10
}

//to implement interface in Class we need keyword `implements` 
class Zoo implements Animal {
  type: string;
}

console.log(animalTypeChecker(pysia));

//function types
interface AddFunction {
  (number1:number, number2: number): number;
}

let myAddFunc: AddFunction;
myAddFunc = function(value1:number, value2:number) {
  return value1 + value2;
}

console.log(myAddFunc(4,7));

//transforming values into numbers by adding `+` in front of it
console.log(+'54');
console.log(+true);
console.log(+false);


//changing array length
let customArray = [1,2,3,4,5];
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
 * inheritance "is" relationship vs composition "has" relationship
 * interfaces (contracts) vs abstract classes
 * benefits of generics (type safety)
 * polymorphism: (two types: inheritance and parametarize)
   Inheritance also allows different subclasses to be used interchangeably through the interface provided by a common superclass. A function that expects a superclass instance as an argument can also be passed a subclass instance without the function having to know about any of the subclasses. Substituting classes that have a common superclass is often called polymorphism
 * static 
 * primitives
 * linked list stack using stack interface, without shifting
 */
 
