let arr = [2, 3, 4, 5, 6, 7];
arr.forEach((val) => {
  console.log("the square of " + val + " is : " + val ** 2);
});

// * Another method

let num = [2, 3, 4, 5, 6, 7];
let calsq = (num) => {
  console.log(num ** 2);
};
num.forEach(calsq);
