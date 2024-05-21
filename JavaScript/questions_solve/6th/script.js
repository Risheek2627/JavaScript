// todo   Implement a function that selects all <a> elements with a class of "external-link" and adds the attribute target="_blank" to open links in a new tab.
//  todo   Write code to select the last <li> element within an ordered list and remove it from the DOM using removeChild.

let link = document.querySelectorAll("a");
for (let i = 0; i < link.length; i++) {
  link[i].setAttribute("target", "_blank");
}

let last = document.querySelector("ul").lastElementChild;
last.parentNode.removeChild(last);
