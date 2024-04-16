// // Comments in js

// // Arithmetic operations
// let a=5;
// let b=10;
// console.log("Addition : ",a+b);
// console.log("Subtraction : ",a-b);
// console.log("Multiplication : ",a*b);
// console.log("Division : ",a/b);


// // Moulus
// let c = 20;
// let d = 2;
// console.log("Modulus : ",c%d);

// // Exponentation  means power 2^3  (2 to the power of 3)
// let e = 2;
// let f = 3;
// console.log("Exponenation : ",e**f);

//  -------------------------------------------------------------------------------------

// Unary operators
// Dont get cofused i have used block scope read the book about it

// Increment

{let x = 3;
x = x+1;
console.log(x)
}

{
    let x = 3;
    x++;
    console.log("Increment : ",x)
}

// Pre increment
{
    let x = 10;
    console.log("pre increment : ",++x)
}

// Post increment
{
    let x = 10;
    console.log(" x =",x++) // first work will be done(means 5 will get print) afterwards the value wil be changed
    // After this the value will be stored in x 
    console.log("post increment : ",x)
}

// ---------------------------------------------------------------------------------------

// Decrement

{
    let y = 5;
    y = y+1;
    console.log("y = ",y);
}

{
    let y = 5;
    y++;
    console.log("Decrement : ",y);
}

// Pre decrement
{
    let y = 15;
    console.log("Pre decrement : ",--y);
}

{
    let y = 15;
    console.log("y = ",y--);
    console.log("post decrement : ",y)
}
// ----------------------------------------------------------------------------------------

