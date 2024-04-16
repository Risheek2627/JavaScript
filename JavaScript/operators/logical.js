// Logical operators 


//   1)  Logical AND &&
{

let a = 5;
let b = 6;

let cond1 = a > b;     
let cond2 = b == 6;
console.log(" cond1 && cond2 : ",cond1 && cond2 );

}

{
let a = 5;
let b = 6;

let cond1 = a < b;     
let cond2 = b == 6;
console.log("cond1 && cond2 : ",cond1 && cond2 );
}

// Logical OR ||
{
    let a = 5;
    let b = 6;
    
    let cond1 = a < b;     // true
    let cond2 = b == 5;    // false
    console.log("cond1|| cond2 : ",cond1||cond2 );
}

// Logical NOT !
{
    let a = 5;
    let b = 6;
    console.log("!(a>b) : ",!(a>b))  // false (basically its false but it gives true)
}
