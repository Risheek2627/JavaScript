let btn1 = document.getElementById("btn1");
btn1.onclick = () => {
  console.log("btn was clicked");
};

let div = document.querySelector("div");
div.onmouseover = () => {
  console.log(" youre inside the div");
};

//   todo   ------- Events Objects ----------
let btn2 = document.getElementById("btn2");
btn2.onclick = (e) => {
  console.log(e);
  // you can see all the event objects here \
  console.log(e.type); // it tells type of event
  console.log(e.target); // it tells target of event
  console.log(e.clientX, e.clientY);
};

//  todo  ---------  Event Listener ---------
document.getElementById("btn3").addEventListener("click", () => {
  console.log("event listener is working");
});

document.getElementById("btn3").addEventListener("click", () => {
  console.log("event listener is working 2");
});

document.getElementById("btn3").addEventListener("click", () => {
  console.log("event listener is working 3");
});

// todo remove event listener
const handler = () => {
  console.log("event listener is working 4 ");
};
document.getElementById("btn3").addEventListener("click", handler);

// after this the event will be deleted
document.getElementById("btn3").removeEventListener("click", handler);
