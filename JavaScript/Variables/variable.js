name="risheek"
console.log(name)

// Keywords ( let, var, const) //
var age = 25;
var age = 56;
var age = 95;
console.log(age);
// the output will be 95 as in var variable can redecalred and updated (but we will not use)

// >>>>>>>>> Let <<<<<<<<<<<

// let Age = 45;
// let Age = 34;
// let Age = 23;
// console.log(Age)    

// >>>>>>> This code will throw an error bcz we decalre age three times (only once age can be decalred in let)

// ( But we can update in let)

let Age= 56;
Age = 34;
Age = 45;
console.log(Age) 

// output will be 45

// >>>>>>>>> const <<<<<<<<<

// const num = 67;
// const num = 45;
// console.log(num);

// we cannot redeclare the variable in const 
// we cannot update the variable in const

// const n = 67;
// n = 45;
// console.log(n);

const PI = 3.14;
console.log(PI);  

// boolean
let t=true;
console.log(t);
console.log(typeof(t));

// undefined
let x;
console.log(typeof(x));

//  Null
let y= null;
console.log(typeof(y));

// BigInt 
let  z = BigInt(123);
console.log(z);
console.log(typeof(z));


// Symbol
let s = Symbol(345);
console.log("Symbol : ",s)
console.log(typeof(s))

//  Object (here object means collection of variables or values)
const Student ={
    fullName : "Ravi",
    age : 23,
    cgpa : 9.0,
    isPass :  true
};
console.log(Student);
console.log(typeof(Student));

const product={
    name: "Parker",
    color : "Black",
    price : 270,
    rating : 4 / 5,
    offer : "5 %" ,
};
console.log(product);


const profile={
    Name : " ShradhaKapra",
    followers :  "569K",
    isfollow : true,
    posts : 150 ,
    occupation : "Entreprenuer",
    Founder : "Apna Colllege",
    Work : "Ex-Microsoft"
};
console.log(profile);
console.log(typeof profile["Name"]);

// Block scope
{
    let a=10;
    console.log(a)
}

{
    let a=23;
    console.log(a)
}

let student = {
    car : "Maercedes",
    fees : "2000",
    qualification  : " High level",
    salary : "78LPA",
    Name : "Risheek"
}
console.log(student)