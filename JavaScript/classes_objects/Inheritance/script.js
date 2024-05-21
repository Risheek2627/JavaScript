class Parent {
  hello() {
    console.log("Hii");
  }
}

class Child extends Parent {} // no need to wrte the method again , bcz it inhertied by parent u can use by ch1.hello()

const ch1 = new Child();
ch1.hello();

class Person {
  eat() {
    console.log("Eat");
  }

  sleep() {
    console.group("sleep");
  }
}

class Engg extends Person {
  work() {
    console.log("coding");
  }
}

class Civil extends Person {
  work() {
    console.log("Construction");
  }
}

const eng = new Engg();
// eng.sleep();
// eng.eat();
// eng.work();
const civil = new Civil();
// civil.eat();
// civil.sleep();
// civil.work();

// todo   ------- method overriding ---------
// *  here if we have same method in parent and child , the child class method's will get exceuted

class student {
  homework() {
    console.log("do homework");
  }

  classwork() {
    console.log("do class work");
  }
}

class child extends student {
  homework() {
    console.log("do home work in home");
  }
}

const ris = new child();
ris.homework();
console.log("\n");

// todo      -------------    Super keyword   --------
// ?    as we have constructor in parent class and child class  when we create new object  for child class
// ?    and run the code we get error (must call super constructor before using 'this' in derived class constructor) , bcz we should invoke the parent constructor first so we use ("super") keyword
// ?    then both constructors will work

class P {
  constructor(name) {
    this.name = name;
    console.log("this is parent consntructor");
  }
  eat() {
    console.log("eat");
  }
}
class engg extends P {
  constructor(name) {
    console.log("this is child constructor");
    super(name); // to invole parent class constructor
    console.log("exit child constructor");
  }

  work() {
    console.log("proble solving, coding, buidling softwares");
  }
}

const engobj = new engg("Risheek");
engobj.eat();
