// *  Properties

// todo  -----  tagName - returns tag for element node -------
let head = document.getElementById("heading");
console.log(head);
// run this in console(browser) head.tagName  it returns H1 which tag name of the element

// todo ------ inner text -------
let text = document.querySelector("div");
console.log(text);
//  it returns the inner text in that element or text in the child and all
// ex :-   here we have div (div is the parent element ) when you give innerText for it have(h4,ul,li)
//  as the children it returns all the text in that elements ("in a string")

// todo  -------- innner html -------
let contain = document.querySelector("div").innerHTML;
console.log(contain);
// returns the plain text or HTML contents in the element

let heading1 = document.getElementById("heading");
console.log(heading1);
