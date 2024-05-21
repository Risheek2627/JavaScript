// todo Write a function that sets the HTML content of a <div> element to "<h1>Hello World!</h1>" using innerHTML.
// todo Select all elements with a class of "description" and update their text content to "New Description" using textContent

document.getElementById("container").innerHTML = "<h1> Hello </h1>";

let desc = document.getElementsByClassName("description");

for (let i = 0; i < desc.length; i++) {
  desc[i].textContent = "New description";
}
