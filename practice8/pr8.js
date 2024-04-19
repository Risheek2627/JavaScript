// ? (q1) filter out marks of students that scored 90+
let marks = [67, 80, 90, 23, 93, 12, 56, 97, 89, 99, 79, 86, 95];
let output = marks.filter((val) => val > 90);
console.log(output);

// ? (q2)  take a number n as input from user. Create an array of numbers from 1 to n
// * use the reduce method to add the elemnts in array
// * use the reduce method to multiply the elemnts in array

let n = prompt("enter the number ");
let array = [];
for (let i = 1; i <= n; i++) {
  array[i - 1] = i;
}
console.log(array);

let add = array.reduce((res, curr) => {
  return res + curr;
});
console.log("addition : " + add);

let mul = array.reduce((res, curr) => res * curr);
console.log("Multiplication : " + mul);
