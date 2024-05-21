// const URL = "http://localhost:3000/api/joke";   (this is very simple API created by me )

// async function getFacts() {
//   console.log("fetching the jokes.....");
//   try {
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data[0].title);
//   } catch (error) {
//     console.error(error);
//   }
// }
// getFacts();

// ------------------------------------------------------------------------------------------------------

const URL = "https://cat-fact.herokuapp.com/facts";

async function getFacts() {
  console.log("fetching the jokes.....");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data[0].text);
}
getFacts();
