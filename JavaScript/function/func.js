function my_func(){
    console.log("Risheek : Hlo I am Risheek , I am learning JS");
    console.log("JavaScript : Hlo Risheek great, all the best do well")
}
my_func()

// todo   --------   Parameter  ----------
function print(name,profession){
    console.log(`Hi ${name}, welcome to function`);
    console.log(`I am professional ${profession}`);
}
print("Risheek","Full Stack Developer")

// todo   ----------   return  -----------
function sum(x,y){
    s = x + y;
    console.log("before return")
    return s;
    console.log("after return")   // *  it will excute once return is given
}
let val = sum(3,4);
console.log(val);

