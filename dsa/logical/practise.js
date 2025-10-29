//1) array/object to Object
// const har = ["Aman", 123, true, "Sharma"]
// // syntax for convertion using obejct assign Object.assign(target, ...sources) and stringify convert JSONobject to string
// let obj = Object.assign({},har)
// console.log(JSON.stringify(obj));


//2) PARSE CONVERT object to string/array
// const car = {
//     Aman: "12",
//     Sharma: true
// }
// console.log(Object.entries(car))
// console.log(Object.values(car));


// forEach and for loop
// const numbers = [1,2,3,4,5]
// const days = ["Mon","Tues","Wed","Thus","Fri"]
// numbers.forEach(function(number) {
//     console.log(number)
// })
// numbers.forEach(number=>{
//     console.log(number);
// })
// days.forEach(function(days,values){
//     console.log(`Days number ${values + 1}: ${days}`);
// })
// days.forEach((key,values)=>{
//     console.log(`Days ${values + 1} : ${key}`);
// })
// numbers.forEach((number, index, array)=>{
//     array[index] = number / 2
// })
// console.log(numbers);




// Methods of javascript
// const gori = ["Aman", "Sharma","Singh", "Kureja","Rahul"]
// const music = ["Singh" ,"Anu"]
//1 let beb = gori.toString()
// console.log(beb);
//2 let beb = gori.join(" * ")
// console.log(beb);
// const tonado = gori.concat(music)
// console.log(tonado);
// gori.pop() and push("dsadsa")
// gori.unshift("Kamal")
// console.log(gori);

// console.log(gori.slice(1,3))
// gori.splice(2,0, "Gurpre","Jetan")
// console.log(gori)


// string
// let  text = "Aman, Sharma, Dhoni"
// let soni = text.slice(3,12)
// console.log(soni);
// let ocwal = "5"
// let soni = ocwal.padStart(4,"x")
// let soni = ocwal.padEnd(4,"x")
// let boni = text.charAt(0)
// console.log(boni);


// map method
// const numbers = [1,2,4,68,6] 
// const itwo = numbers.map(function(number){
//     return number * 4;
// })
// console.log(itwo);


// const d = new Date()
// // const b = d.toDateString()
// // const b = d.toUTCString()
// const b = d.toISOString()
// console.log(b);