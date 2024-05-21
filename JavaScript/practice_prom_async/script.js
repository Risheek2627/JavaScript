// function delay(mssg, ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(mssg);
//       resolve(200);
//     }, ms);
//   });
// }

// delay("delayed", 2000);

// (async function sequential() {
//   await delay("Task1", 1000);
//   await delay("Task2", 2000);
//   await delay("Task3", 3000);
// })();

// ? -----------------------------------------------------------------------------------------------------------------------

// function randomError() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve("success");
//       } else {
//         reject("rejected");
//       }
//     }, 2000);
//   });
// }

// (async function getData() {
//   try {
//     await randomError();
//     console.log("succes");
//   } catch (error) {
//     console.log(error);
//   }
// })();

// ?-----------------------------------------------------------------------------------------------------------

// function randomError(message, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve(message);
//       } else {
//         reject(new Error(message));
//       }
//     }, delay);
//   });
// }

// randomError("Error occured", 2000)
//   .then((mssg) => {
//     console.log("Resolved:", mssg);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });

//   ?-------------------------------------------------------------------------------------------------------------------

async function fetchAndProcessData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    // Process data here
    return processedData;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Usage
fetchAndProcessData().then((processedData) =>
  console.log("Processed Data:", processedData)
);


