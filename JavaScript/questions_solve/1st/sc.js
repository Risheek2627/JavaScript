//  todo   Write a function that selects an element with a specific ID and changes its background color to red.
//  todo   Create a button that, when clicked, changes the text of a <div> element to "Button Clicked!" using innerText

document.getElementById("container").style.backgroundColor = "red";

document.getElementById("my_button").addEventListener("click", function () {
  document.getElementById("container").innerText = "Button clicked !";
});
