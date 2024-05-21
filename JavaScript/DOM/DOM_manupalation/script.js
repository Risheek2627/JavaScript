// todo   ------ Element access with ID ----------
let heading = document.getElementById("heading");
let head = document.getElementById("head2");
console.log(heading);
console.log(head);

// todo   ------ Element access with Class --------
let cl = document.getElementsByClassName("cl1");
console.log(cl);
console.dir(cl);

// todo  -------- Element access with Tag ---------
let para = document.getElementsByTagName("p");
console.log(para);
console.dir(para);

// todo  --------  Element access with Query Selector -------
//*   QuerySelector("myID / my Class / tag")
let first_ele = document.querySelector("p");
console.log(first_ele);
// as it returns 1st element (now i have 2 paragraphs it returns me a first paragraph)

// todo -------- Element access with Query Selector All --------
//*   QuerySelector("myID / my Class / tag")
let all_ele = document.querySelectorAll("p");
console.log(all_ele);
// if you want all the elements that are in "p" tag use "queryselectorall"

//*       ------------ using query selector / all for ID ------------
let i = document.querySelector("#heading");
console.log(i);

//*      ------------- using query selector / all for class ---------
let first_class = document.querySelector(".cl1");
console.log("first class", first_class);

let all_class = document.querySelectorAll(".cl1");
console.log("All class", all_class);
