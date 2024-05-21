let new_but =  document.createElement("button");
new_but.innerText = "click me"
new_but.style.backgroundColor = "red";
new_but.style.color = "white";
document.body.prepend(new_but)


let para = document.querySelector("p");
para.setAttribute("class","new_class")