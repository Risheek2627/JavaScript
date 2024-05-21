const student = {
  fullName: "Risheek",
  age: 18,
  marks: 96.4,
  printMarks: function () {
    // this is prototype , object that inside the object it has some properties and methods
    console.log(`${this.fullName} got ${this.marks}`);
  },
};

const employee = {
  calcTax() {
    console.log("tax rate is 10%"); // we can create function or method in this ways 1st (most prefered)
  },
  calTax2: function () {
    console.log("tax rate is 20%"); // we can create like this also
  },
};

const Karan = {
  salary: 5000,
  calcTax() {
    console.log("tax rate is 10%"); // if prototype and object have same method name , object's method wii be used
    //  here employee is protoype and karan is the object means we create proto in next line (karan method will be used) if u run like this karan.calcTax
  },
};

// * Now I want use functions / Methods of 1st object in 2nd object so I want to set prototype for Karan

Karan.__proto__ = employee;

// *which object's function / method  we want to use we set prototype to other object in which it is used
// *   after running we can see , a new function will be created in prototype called "calcTax"  and "calcTax2"
// * Means under karan  prototype the employes object's method / function will be there
