let modebtn = document.getElementById("mode");
let body = document.querySelector("body");

let currMode = "Light";
modebtn.addEventListener("click", () => {
  if (currMode === "Light") {
    currMode = "Dark";
    body.classList.add("Dark");
    body.classList.remove("Light");
  } else {
    currMode = "Light";
    body.classList.add("Light");
    body.classList.remove("Dark");
  }
  console.log(currMode);
});
