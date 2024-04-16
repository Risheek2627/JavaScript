//  String methods

// UpperCase :-
let str1 = "risheek";
let nwstr = str1.toUpperCase();
console.log("Old cap : "+str1)   // it will print risheek only bcz the 
// how many string methods that can't change the original string
// so run in console in wwebpage and see the changes
console.log("New cap : "+nwstr);   // you need to store it in a new variable 
console.log("\n")

// LowerCase :-
let lc = "RISHEEK";
let nlc = lc.toLowerCase();
console.log("Old string : ",lc);
console.log("New String : ",nlc);
console.log("\n")

// Trim
let tr = "   spacing";
let c = tr.trim();
console.log("Before trimming : ",tr);
console.log("After trimming : "+c);

//  Slice
let sr = "ABCDEFg";
console.log("SLice : ",sr.slice(1,-1));  // Returns part of sgring

// Concat
let var1 =  "I am good";
let var2 =  " boy";
console.log("Concat : ",var1.concat(var2))

// replacing with new word
let rep = "Rainy season";
console.log("Replacing : "+rep.replace("Rainy","Summer"));

// CharAt
let ch = "Intelligent";
console.log("CharAt : "+ch.charAt(6));
