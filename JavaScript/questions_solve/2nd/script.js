// todo   Write code to select all elements with a class of "highlight" and add a yellow background color to each of them.
// todo   Implement a function that selects all <p> elements containing the word "Lorem" and changes their font size to 16px.

let high = document.querySelectorAll(".highlight");
high.forEach((val) => {
  val.style.backgroundColor = "yellow";
});

document.querySelectorAll("p").forEach((val) => {
  if (val.textContent.includes("Lorem")) {
    val.style.fontSize = "20px";
  }
});
