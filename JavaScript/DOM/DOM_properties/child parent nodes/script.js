// *  first child after that element , wht is there if text is there
// *  is shows text ,if whitespace is there it shows text
// * <p id='para'><button> click <button> in this condition it  shows button

// *if you want first element that parent search for firstElementChild

let node = document.getElementById("heading");
// let out = node.firstElementChild;
let text = node.firstElementChild;

let out = text.nodeValue;
