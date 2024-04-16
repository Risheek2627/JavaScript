// create string
let str = "Risheek";
console.log(str);

// string length
let len = str.length;
console.log("the length od string : "+len);

// String indices 
console.log("String indices : "+str[0]+"  "+str[6]);

// Template literals
let sent = `This is special string`;
console.log(sent);

// ex :-
{
    let obj ={
    item : "pen",
    price : 10
};
console.log("The cost of ",obj.item , "is" , obj.price , "rupees");
}
// instead of writing separetly separelty all the things we can write in (singel line using  ( ` ` )----- backticks )
{
    let obj = {
        item : "pen",
        price : 10
    };
    let output = `The cost of ${obj.item} is ${obj.price} rupess`;
    console.log("printing this output using template literal : " + output)
}
// this is phenomenon is known as string interpolation
let sentence = `In this we can add expression also ${1+2+3}`;
console.log(sentence);

let crt = "Apna\tcollege" // actual there are 13 characters after printing the output you get 12 characters
console.log(crt.length)    //(/t) acts as an single element
 

