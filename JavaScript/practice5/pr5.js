// ? remove first cmpny from the array
// ? remove Uber and add OLA in its place
// ? add amazon at the end



let cmpny = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
// todo  remove first cmpny from the array
cmpny.shift();
console.log("Remove first cmpny : ",cmpny);

// todo  remove Uber and add OLA in its place
cmpny.splice(1,1,"OLA");
console.log("Remove uber and add OLA cmpny : ",cmpny);

// todo  add amazon at last
cmpny.push("Amazon")
console.log("Add amazon at last : ",cmpny);