// todo    --------  Promises  ------
// *  Actually promises are the solution for callback hell
//  *   it have 3 types pending , fullfilled (resoloved), reject

// todo   ---------    Pending  -----------
let promise = new Promise((resolve, reject) => {
  console.log("order successfully reached");
});

// todo  -------------   Fullfilled (resolve)  ----------------
let promise1 = new Promise((resolve, reject) => {
  resolve("order reached succesfuly");
});

// todo    --------------   Reject   -------------
let promise2 = new Promise((resolve, reject) => {
  reject("order canceled");
});
console.log(promise2);

// *   we will not write a promise prgms , promises are sent by API's , we just handel it
function getData(data) {
  // assume we  are requesting dataid from API       (here API is promising like i will give data after 5 sec)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data);
      resolve("succesful"); // after printing the data , returning resolve means fulfilled the work
    }, 5000);
  });
}
// here what happens means before printing the dataid it showa pending , after printing the dataid it shows fulfilled
//  in console store the function in variable and run the code
