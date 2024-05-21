// todo     as i told before we don't create promises we just handel it , pending resolve reject are given by API's
// todo     we just here to handel that

// ?      .then()   and    .catch()

//  todo   there will be some work to do after promise is fullfilled so we use   promise.then((res)=>{...})
// todo    there will be some work to do if promise is rejected so we use to that work by using    promise.catch((err)=>{...})

//  creating function
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am promise");
//     reject("netowrk error");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log(res);
// });
// //   here what happening  means  we are defining  like do some work if promise is fullfilled , here it willl log the mssg promise succesfull after fullfilled the promise

// promise.catch((err) => {
//   console.log(err);
// });
// //  like this you can change for reject also , if the promise is rejected then do this work like that by using promise.catch

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("successful");
    }, 3000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("successful");
    }, 3000);
  });
}

console.log("fetching the data1.....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   // after kowing the that request was succesfull then print second data
//   console.log("fteching data 2.....");
//   let p2 = asyncFunc2();
//   p2.then((res) => {});
// });

// console.log("fetching the data2....."); // instead of this we use promise chain , then inside then
// let p2 = asyncFunc2();
// p2.then((res) => {
//   console.log(res);
// });

// // easier code
asyncFunc1().then((res) => {
  console.log("fetching the data 2....");
  asyncFunc2().then((res) => {});
});
