//  Conditional statement
// if statement

let a= 3
if ( a> 18 ){
    console.log("They can have driving licence")
}

let mode="dark";
let color;
if(mode=="dark"){
    color="black";
}

if(mode=="light"){
    color="white";
}
console.log("color : ",color)

// if-else statement

    {
    let mode = "light";
    let color;
    if(mode=="dark"){
        color = "black";
    }else{
        color = "white";
    }
    console.log(color)
    }

let age = 23;
if(age > 18){
    console.log("can vote");
}else{
    console.log("cannot vote")
}

let num = 4;
if( num %2==0){
    console.log("Even number")
}else{
    console.log("Odd number")
}

// else if statement
num = 34;
if (num<18){
    console.log("Your Junior");
}else if(num>60){
    console.log("Your Senior")
}else{
    console.log("middel")
}

// //  Trenary operators
num1 = 34;
let res = num1 > 18 ? "Adult":"Not adult";
console.log(res)


// Switch statement
let fruit = "banana";
switch (fruit) {
    case "banana":
         console.log("Banana is yellow color");
         break;
    case "apple":
        console.log("apple is red in color");
        break;
    case "orange":
        console.log("orange is in orange color");
        break;
    default:
        console.log("I don't know that fruit ")

}