// todo  DOM manupalation
// todo Attributes

// todo -------   get attribute  ---------

let div = document.querySelector("div");

let id = div.getAttribute("id");
console.log(id)

let para  = document.querySelector("p");
let cl = para.getAttribute("class");
console.log(cl)

// * i will get attribute value present in that attribute (here in ID attribute I had box value)

// todo  ----------   set attribute -----------
// set new value for your attribute
let p =  document.querySelector('p');
let ne = p.setAttribute("class","new_class")

let new_p = document.querySelector('p');
let new_c = new_p.setAttribute("name","new_name") // we can add another attribute also

// * in the above code we have class name for p is para , now we changed that to new_class using(set_attribute)

// todo Style

let st_div =  document.querySelector('div');
div.style.backgroundColor="red";

// todo -------- Insert Elements --------  
// before adding the new value we should create them  (let el = document.createElement("div"))
// *  ---------------     node.append  ---------------------
let nw_btn = document.createElement("button")
nw_btn.innerText = "click here !"

let di = document.querySelector("div");
di.append(nw_btn)
// inserting the button inside div at last 

// * -----------------     node.prepend  ----------------
// to add element at first inside the node
let pe = document.createElement("p");
pe.innerText = "I am prepend ";
di.prepend(pe)

// *  ---------------   node.before -----------(outside the node before the node)
let el1 = document.createElement('h2');
el1.innerText = "This is node before"
di.before(el1)

//  * ----------    node after ------------(outside the node after the node)
let el2 = document.createElement('h2');
el2.innerText = "This is node after"
di.after(el2)


// todo  Delete element 
// it delets the first paragraph
let par = document.querySelector("p");
par.remove()