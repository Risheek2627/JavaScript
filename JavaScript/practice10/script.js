let elements = document.querySelectorAll(".box");

// add the three unique statements for 3 div

// todo  I have used three methods ----

for (let i = 0; i < elements.length; i++) {
  elements[i].innerText = `the unique text ${i} `;
}

let ind = 1;
for (i of elements) {
  i.innerText = `the unique text ${ind}`;
  ind++;
}

elements.forEach((val, indx) => {
  val.innerText = `the unique text ${indx}`;
});
