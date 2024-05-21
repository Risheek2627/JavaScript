// todo     Create a function that selects all <img> elements on the page and sets their src attribute to a placeholder image URL.
//  todo     Write code to select the first <h2> element on the page and change its text content to "Welcome to My Website"

let img = document.querySelectorAll("img");
for (let i = 0; i < img.length; i++) {
  img[i].src = "placeholder.jpg";
}

document.querySelector("h2")[0].textContent = "Welcome to my website";
