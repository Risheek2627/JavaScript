// todo --------- MAP  ----------
//  it is also like forEach but difference is map creates new array
let arr = [2, 3, 4, 5, 6, 7];
arr.map((val) => {
  console.log(val * 2);
});
console.log("\n");

// *  Storing the array in new array

let num = [2, 3, 4, 5, 6, 7];
let newArr = num.map((val) => {
  return val ** 2;
});
console.log(newArr);
console.log(num); // still we have old array of nums
console.log("\n");

{
  let num = [1, 2, 3, 4, 5];
  let out = num.map(call);

  function call(val) {
    return val ** 2;
  }
  console.log(out);
}

// todo  --------- Filter ----------
// * filter returns the values if it is true (if the condition is true)
let mul = [1, 2, 3, 4, 5];
let nwml = mul.map((x) => {
  return x % 2 === 0;
});
console.log("map");
console.log(nwml);

{
  let mul = [1, 2, 3, 4, 5];
  let nwml = mul.filter((x) => {
    return x % 2 === 0;
  });
  console.log("this is filter");
  console.log(nwml);
}

{
  let mul = [35, 5, 23, 67, 20, 78];
  let nwml = mul.filter((x) => {
    return x > 30;
  });
  console.log("this is filter");
  console.log(nwml);
}

// todo  ------- Reduce --------

let re = [1, 2, 3, 4];

const out = re.reduce((res, curr) => {
  return curr;
});
console.log(out);
