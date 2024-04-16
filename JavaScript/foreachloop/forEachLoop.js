// // *  a function can be passed as parameter to another function
// function high(callback) {
//   console.log("this is higher function");
//   callback();
// }
// function call() {
//   console.log("this is call back function");
// }

// high(call);

// ? --------------------------------------------------------------------------------------
//  todo  -----  forEachLoop  -----
let arr = ["bengaluru", "mumbai", "chennai", "pune"];
arr.forEach((val) => {
  console.log(val.toUpperCase());
});

// *      forEach have three parameters

// ? forEach( value , index , parameter )
{
  let arr = ["bengaluru", "mumbai", "chennai", "pune"];
  arr.forEach((val, idx, array) => {
    console.log(val.toUpperCase(), idx, array);
  });
}
