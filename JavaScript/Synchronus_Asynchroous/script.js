// todo     ------ Synchronous ----------
//  ?     one by one it will get execute
console.log("one");
console.log("two");

//  todo     ------- Asynchronous ----------
//  code 1
//  code 2
//   API            think while recieving the data from API may get delayed , it will affect the upcoming codes by not executing
//                  but in asynchronous it will not happen , everything goes parallely , code 3 , code 4 will get execute then after
//                  some time API will give output
//   code 3
//  code 4

console.log("before");
setTimeout(() => {
  console.log("hii");
}, 2000); // setTimeout is a funtion , where we can decide when code should execute (2sec = 2000ms)
console.log("four"); // it will get execute without waiting for above function
