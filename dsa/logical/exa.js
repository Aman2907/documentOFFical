
//1 spread operator
// of object and array
// var array1 = [10, 20, 30, 40, 50];
// var aman = [13,444,12,5];
// var ama = [1213,31]

// let x = [...array1,...aman,...ama];
// var l = [...array1,12,42]
// console.log(l)

// var array1 = [10, 20, 30, 40, 50];
// var but = [21,11]
// let m = [...array1,...but, 12,42]

// console.log(m)

// let obj = {
//   Name:"Sumeet",
//   Age: "21"
// }

// let xiii = {...obj, phone:"132112"}
// console.log(xiii)



// let obj = {
//     Name:"Aman",
//     Class:"Seven" 
// }
// let xi = {...obj, Phone:"232332322"}
// console.log(xi)
// let arr1 = [1,4,23,32];
// let arr2 = [34.65,7,91];
// let xi = [...arr1,...arr2];
// console.log(xi)



//2 rest operator
// function sumapp(a,b,c,...other){
//     return a+b+c
//   }
// function sumapp(a,b,c,...other){
//   return {num:a+b+c, otherhai:other}
// }

// function addsum(x,y,z){
//   return x+y+z
// }

// var beb = addsum(12,43,1)
// console.log(beb)

// var array1 = sumapp(13,1,5,6,2)
// console.log(array1)






// 3 arrow function
// const hello = () => {
//     console.log("I am here")
// }
// const multi = x => x * x
// hello()
// console.log(multi(3))
// const help = () => {
//     console.log("I am here")
// }


// help()
// const add = (a,b) => a*b
// console.log(add(12,42))





// 4 currying

//normal function
// function calculateVolume(length, breadth, height) {
//     return length * breadth * height;
// }
// console.log(calculateVolume(4, 5, 6));


// 5 currying function
// function calculateVolume(length) {
//     return function (breadth) {
//         return function (height) {
//             return length * breadth * height;
//         }
//     }
// }
// console.log(calculateVolume(4)(5)(6));




// function team(csk){
//     return function(kkr){
//       return function(rcb){
//         return rcb*kkr*csk
//       }
//     }
// }
// console.log(team(2)(3)(14))




// shallow copy 

// let student = {
//     Name:"Aman",
//     Company:"IBM"
// }


// console.log(student)
// let x = student;
// console.log(x)
// x.Name = "Sunil";
// console.log(x)

let college = {
    Name:"Pathak",
    Company:"IBM"
}

console.log(college)
let x = college
x.Name = "Kunal"
console.log(x)


// deep copy
// let student = {
//     Name:"Aman",
//     Company:"IBM"
// }

// let xam = JSON.parse(JSON.stringify(student))
// console.log(xam.Name)
// xam.Name = "ROhit"
// console.log(xam)
// console.log(student)




//  object to array
// object.entries its return key value
// object.values its return only values

// let aman = {
//     Name:"Aman",
//     Class:"Eleven"
// }

// let x = Object.entries(aman)
// let z = Object.values(aman)
// console.log(z)





// array to object 

// let arr = [1,4,5]
// let xaming = Object.fromEntries(arr)
// console.log(xaming)


// call apply
// function greet(name,classfy) {
//     console.log(`Hello, ${name} ${classfy}`);
//   }
//   greet.call(this, 'Aman', 'Seven'); // Hello, Aman
  

// apply
//   function sum(a, b) {
//     return a + b;
//   }
//   sum.apply(this, [2, 3]); // 5
  

//   //bind
//   const person = {
//     name: 'Aman',
//   };
//   function showName() {
//     console.log(this.name);
//   }
//   const boundShowName = showName.bind(person);
//   boundShowName(); // Aman

// second examlple
  
// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function() {
//     console.log(this.getPokeName() + 'I choose you!');
// };

// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// logPokemon(); // 'Pika Chu I choose you!'
  


// This method is used to execute a function after a specified delay (in milliseconds). It only runs the function once.
// setTimeout(function() {
//     console.log('This message is displayed after 2 seconds');
//   }, 2000);

  
//   This method is used to repeatedly execute a function at a specified time interval (in milliseconds).
  // setInterval(function() {
  //   console.log('This message is displayed every 3 seconds');
  // }, 3000);
  