// async function hello() {
//   console.log("heloo");
// }
// when you run this code , you can see automatically it returns promise function

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather report");
      resolve("succes");
    }, 2000);
  });
}

// // await (it pauses the execution untill promise returns the resolve)
// async function Getwhtdata() {
//   await api(); // Execution pauses here until the Promise returned by api() resolves
//   await api();
// }

// IIFE expression
(async function Getwhtdata() {
  console.log("searching the data.....");
  await api();
})();

// Getwhtdata();
// ? ----------------------------------------------------------------------
// *  IIFE -  Immediately Invoked Function Expression
// * here what happens we call unneccesaryly the function
// * we should to go the console and call the function

// * By using (IIFE) where it invokes the function immediately
// ?  1.  (function(){})()
// ?  2.  (()=>{})()
// ?  3. (async()=>{})()

// ?------------------------------------------------------------------------
//  todo ---------------------------------------------------------------------------------------------------------------

// function getData(dataid, nxt) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(dataid);
//       resolve("APi called failed");
//     }, 2000);
//   });
// }

// async function getInfo() {
//   await getData(2);
//   await getData(3);
// }

// todo -----------------------------------------------------------------------------------------------------------------

// // Simulate an API call that takes some time to complete
// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Randomly resolve or reject the promise
//       if (Math.random() < 0.5) {
//         resolve("Success");
//       } else {
//         reject("API call failed");
//       }
//     }, 2000);
//   });
// }

// // Async function to get weather data twice in sequence
// async function Getwhtdata() {
//   try {
//     console.log("Starting first API call...");
//     const result1 = await api(); // Execution pauses here until the Promise resolves or rejects
//     console.log("First API call completed with result:", result1);

//     console.log("Starting second API call...");
//     const result2 = await api(); // Execution pauses here until the Promise resolves or rejects
//     console.log("Second API call completed with result:", result2);
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }

// // Call the async function
// Getwhtdata();
