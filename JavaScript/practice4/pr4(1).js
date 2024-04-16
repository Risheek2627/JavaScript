// let array = [250,645,300,900,50];
// let n = [];
// for(let i=0; i<array.length; i++){
//     n.push(array[i]-(0.10*array[i]))
// }
// console.log(n)

{
    let items = [250,645,300,900,50];
    let i = 0;
    let v = [];
    for(let val of items){
        console.log(`value at index ${i} = ${val}`);
        offer = val * 0.10;
        let nw = val - offer;
        v.push(nw)
        i++;
    }
    console.log(v) 
}