// //  Different ways of printing even numbers using loops
// {
// let i = 0;
// while(i<=100){
//     i % 2 == 0;
//     console.log(i);
//     i++;
// }
// console.log("Finish of while loop")
// }

// {
//     for(let i = 0; i<=100 ; i++){
//         i % 2 == 0;
//         console.log(i);
//     }
// }

// {
   
//     for( let i =0; i<=100 ; i++){
//         if (i%2==0){
//             console.log("This is even number : ",i);
//         }
//     }
// }




//  question 2nd
let num = 4;
let guess = prompt("guess the number : ")
while(guess!=num){
    guess = prompt("guess the  crt number : ")
}
console.log("Congratulations you guessed crt number ")

