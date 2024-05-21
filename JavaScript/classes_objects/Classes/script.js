// function User(username, age, occupation) {
//   this.username = username;
//   this.age = age;
//   this.occupation = occupation;

//   return this;
// }

// const User1 = new User("Risheek", 18, "software developer");
// const User2 = new User("Rakesh", 18, "data analyst");
// console.log(User1);

// class User_ {
//   constructor(username, age, occupation) {
//     this.username = username;
//     this.age = age;
//     this.occupation = occupation;

//     return this;
//   }
// }
// const User3 = new User_("Rithik", 18, "software developer");
// console.log(User3);

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function () {
//   console.log(this.name + " makes a noise.");
// };

// function Dog(name) {
//   Animal.call(this, name); // Inheritance
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.speak = function () {
//   console.log(this.name + " barks.");
// };

//  todo     -------------    Classes    -------------
// *    classes are like blueprint to create objects

class ToyataCar {
  //   constructor() {
  //     console.log("this is constructor");          // constructor which automatically invokes u cnn check by uncommeting this code
  //   }
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
  start() {
    console.log("Car started");
  }

  stop() {
    console.log("Car stopped");
  }
  setbrand(brand) {
    this.brand = brand;
  }
}

let car = new ToyataCar("Fortuner", 1890);
car.setbrand("fortuner");
