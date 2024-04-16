

let num1=prompt("please enter the number");
if(num1%5==0){
    console.log(num1," is multiple of 5 ")
}else{
    console.log(num1 , "is not multiple of 5")
}


let marks = prompt("Please enter your marks");
if (marks >= 90){
    console.log("Your grade is A");
}else if(marks >= 70){
    console.log("Your grade is B");
}else if(marks >= 60){
    console.log("your grade is C");
}else if(marks >= 50){
    console.log("Your grade is D");
}else{
    console.log("Your grade is F")
}

let m = 78;
let grade;
if(m>=90){
    grade = "A";
}