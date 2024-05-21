//  todo   Create a form with an input field and a submit button. Write JavaScript code to get the value entered in the input field
// todo    when the submit button is clicked using getElementById.
// todo     Select all <li> elements within an unordered list and log their text content to the console using getElementsByClassName.

document.getElementById("submit").addEventListener("click", function () {
  var input_value = document.getElementById("inp").value;
  console.log("input value : ", input_value);
});

let elements = document.getElementsByClassName("description");
for (let i = 0; i < elements.length; i++) {
  console.log(elements[i].innerText);
}
