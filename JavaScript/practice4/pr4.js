//  todo  -------   Here i have used three diff mtds to print avg of an array ------------

function avg(marks){
    sum = 0;
    for(let i=0; i<marks.length; i++){
        sum = sum + marks[i];
    }
    avg = sum/marks.length;
    console.log("Sum of array : "+sum);
    console.log("Average : "+avg)
}
avg([85,97,44,37,76,60])



{let marks = [85,97,44,37,76,60]
sum = 0;
    for(let i=0; i<marks.length; i++){
        sum = sum + marks[i];
    }
avg = sum/marks.length;
console.log("Sum of array without function : "+sum);
console.log("Average without using function : "+avg)
}

{
let marks = [85,97,44,37,76,60]
let sum=0;
for(let val of marks){
    sum += val;
}
avg=sum/marks.length;
console.log("average : "+avg)
}