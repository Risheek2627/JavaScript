//   1. Callbacks
//   2. Promise chain
//   3. Async Await

// function getData(data, nxt) {
//   setTimeout(() => {
//     console.log(data);
//     if (nxt) {
//       nxt();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   getData(2);
// });

// function getData(data, nxt) {
//   setTimeout(() => {
//     console.log(data);
//     if (nxt) {
//       nxt();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   console.log("fetching data2....");
//   getData(2, () => {
//     console.log("fetching data3...");
//     getData(3);
//   });
// });

// todo    Promise

// function getData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(data);
//       resolve(200);
//     }, 2000);
//   });
// }

// let promise = getData(2);
// promise.then((res) => {
//   getData(3).then((res)=>{})
// });

// todo Async await

function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data);
      resolve(200);
    }, 2000);
  });
}

(async function getDa() {
  await getData(2);
  await getData(3);
})();
