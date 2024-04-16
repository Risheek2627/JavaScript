// ?  Array Methods

// todo       -------- Push --------
let foodItems = ['potato','apple','litchi','tomato'];
foodItems.push('Carrot','cheese')
console.log(foodItems)

// todo      -------- Pop --------
let del_itm = foodItems.pop()
console.log(`Pop item in array is  : ${del_itm}`)
console.log(`After poping the array : ${foodItems}`)
// 

// todo     ------- to_string --------
let fd_itm = ['potato','apple','litchi','tomato'];
console.log(fd_itm);
console.log(`Converted array to string :  ${fd_itm.toString()}`);


// todo    ---------- Concat ----------
let marvel_heroes = ['Ironman','Thor','Captain_America','Spiderman','Hulk','Black_widow'];
let dc_heroes = ['Superman','Batman','Aquaman'];
let indian = ['Hanuman','Krishna'];
let new_hero = marvel_heroes.concat(dc_heroes,indian);
console.log("Concat : "+new_hero);

// todo  ------- Unshift --------
let ml_hr = ['Ironman','Thor','Captain_America','Spiderman'];
 ml_hr.unshift("hulk")
console.log(ml_hr)     // ? it adds item at start

// todo  -------- shift --------
let dc_hr = ['Superman','Batman','Wonder_woman','Aquaman'];
let dl_hr = dc_hr.shift()
console.log("Shift(delted) item : "+dl_hr)
console.log(dc_hr)

// todo  -------- Slice --------
let m_hr = ['Ironman','Thor','Captain_America','Spiderman','Antman','Hulk'];
let h = m_hr.slice(2,5);
console.log("Slice : "+h)

// todo  -------- Splice ---------
{
let m_hr = ['Ironman','Thor','Captain_America','Spiderman','Antman','Hulk'];
let h = m_hr.splice(2,2,"dc_hr","dc");
console.log("Splice : "+m_hr)
}


