// function sum(a, b) {
//   console.log(a + b);
// }

// function calc(a, b, func) {
//   func(a, b);
// }

// calc(4, 5, sum);

// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j < 5; j++) {
//     str = str + j;
//   }
//   console.log(str);
// }

// A function that simulates an asynchronous operation using setTimeout
// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { id: 1, name: "John Doe" };
//     callback(null, data);
//   }, 1000);
// }

// // Using the callback
// fetchData((err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data); // { id: 1, name: 'John Doe' }
//   }
// });

function getData(dataid, nxt) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(dataid);
      resolve("success");
      if (nxt) {
        nxt();
      }
    }, 2000);
  });
}

// this is call back hell , which is like in pyramid structure , nested call back bad way of programming
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});

// let p1 = getData(2);
// p1.then((res) => {
//   console.log("another...");
//   let p2 = getData(3);
//   p2.then((res) => {});
// });
