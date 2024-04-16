let marks = [23,34,56,78,74,23,13,78];
console.log("Indices  : ",marks[5]);

// todo Change the value of array by indices

marks[5] = 56;
console.log("Indices  : ",marks);

let str = ["Risheek"];
str[1] = "ed";
console.log(str);


// ? Pringting the arrays in loops

let loop = [23,45,56,7,45,345,234];
for(let i=0; i<loop.length; i++ ){
    console.log(i)
}

// ? printing the array of string using for of
let str1 = ['Hanuman','Ironamn','Superman','Batman','Hulk'];
for (let i of str1){
    console.log("string : "+i);
}
let s = 0;
let t = "Risheek";
for (let i of t){
    s++
    console.log(s,i)
}
console.log(s)

let cities = ['bengaluru','chennai','mumbai','pune','delhi']
for (let i of cities){
    console.log(i.toUpperCase());
}
