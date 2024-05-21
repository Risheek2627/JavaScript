// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("data1");
//         resolve("successful");
//       }, 3000);
//     });
//   }

//   function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("data2");
//         resolve("successful");
//       }, 3000);
//     });
//   }

//   console.log("fetching the data1.....");
//   // let p1 = asyncFunc1();
//   p1.then((res) => {
//     // after kowing the that request was succesfull then print second data
//     console.log("fteching data 2.....");
//     let p2 = asyncFunc2();
//     p2.then((res) => {});
//   });

//   console.log("fetching the data2.....");     // instead of this we use promise chain , then inside then
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//     console.log(res);
//   });

//   // easier code
//   asyncFunc1().then((res) => {
//     console.log("fetching the data 2....");
//     asyncFunc2().then((res) => {});
//   });

// todo ------------------------------------------------  using promise chain to resolve the solution for call back hell -----------------------------------------------------------

function getData(dataid, nxt) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(dataid);
      resolve("success");
    }, 2000);
  });
}

// this is call back hell , which is like in pyramid structure , nested call back bad way of programming
// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });

// let p1 = getData(2);
// p1.then((res) => {
//   console.log("another...");
//   let p2 = getData(3);
//   p2.then((res) => {});
// });

// this is actually how we write promis chains
getData(1)
  .then((res) => {
    //when data 1 is resolved (fulfilled ) then return data 2
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log("success");
  });
