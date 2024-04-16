// Comparison

{
    let a = 5;
    let b = 4;
    console.log("5==4 : ",a==b);
}

{
    let a = 5;
    let b = 4;
    console.log("5!=4 : ",a!=b);
}

{
    let a = 5;   // number
    let b = "5" // string  ( in this case the string will converted to integer )
    console.log("a==b : ", a==b);
}

//  So we use strict ====

{
    let a = 5;   // number
    let b = "5" // string  
    console.log("a===b : ", a===b);
}

{
    let a = 5;   // number
    let b = "5" // string  
    console.log("a!==b : ", a!==b);
}


// ANd so on ( > , >= , < , <=)